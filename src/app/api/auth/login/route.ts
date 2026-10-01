import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "enhanced-vtop-secret-jwt-key-2026";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const regNo = (body.regNo || body.regNumber || "").trim();
    const password = (body.password || "").trim();

    // Hardcoded prototype validation (supports 25MIMXXXXX, 25MIM10100, and general 25MIM demo IDs)
    const isValid =
      (regNo === "25MIMXXXXX" ||
        regNo === "25MIM10100" ||
        regNo.toUpperCase() === "25MIMXXXXX" ||
        regNo.toUpperCase() === "25MIM10100") &&
      (password === "password123" || password === "Vit@Bhopal2026");

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    // Sign stateless JWT using jsonwebtoken package
    const token = jwt.sign(
      {
        regNo,
        role: "student",
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Set hardened, stateless httpOnly cookie
    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7200, // 2 hours
    });

    return NextResponse.json(
      {
        success: true,
        message: "Authentication successful",
        token,
        user: {
          regNo,
          role: "student",
        },
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Auth Login API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
