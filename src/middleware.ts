import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "enhanced-vtop-secret-jwt-key-2026";
const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  // Core Attribution & Architecture Watermark
  console.log(
    "%c© 2026 Enhanced VTOP Portal | Architecture by Kumar Harshvardhan & Team",
    "color: #00e5ff; font-weight: bold; background: #0b1528; padding: 3px 8px; border-radius: 4px; border: 1px solid rgba(0, 229, 255, 0.3);"
  );

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
