import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "enhanced-vtop-secret-jwt-key-2026";

export async function POST(request: Request) {
  console.time('API-Total');
  try {
    const body = await request.json();
    const { regNo, password } = body;

    // Strict Regex validation: must start with "25MIM" (case-insensitive) followed by exactly 4 digits
    console.time('Regex-Check');
    const isValid = Boolean(regNo) && /^25MIM\d{4}$/i.test(regNo) && password === "password123";
    console.timeEnd('Regex-Check');

    if (!isValid) {
      console.timeEnd('API-Total');
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    console.time('JWT-Sign');
    const token = jwt.sign(
      {
        regNo,
        role: "student",
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
    console.timeEnd('JWT-Sign');

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7200,
    });

    console.timeEnd('API-Total');
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          regNo,
          role: "student",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.timeEnd('API-Total');
    console.error("Auth Login API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
