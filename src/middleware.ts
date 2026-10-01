import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "enhanced-vtop-secret-jwt-key-2026";
const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify JWT in Edge Runtime using jose (standard jsonwebtoken does not run in Edge runtime)
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.next();
  } catch (error) {
    console.error("JWT Verification failed in Edge Middleware:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/timetable/:path*",
    "/profile/:path*",
  ],
};
