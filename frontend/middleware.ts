import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";
import { JwtPayload } from "./types/JwtPayLoad";
import { ROLES } from "@/contants/roles";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isDashboard = pathname.startsWith("/dashboard");
  const isAdmin = pathname.startsWith("/admin");
  const isLogin = pathname.startsWith("/login");
  const isRegister = pathname.startsWith("/register");

  // ❌ Not logged in → protect private routes
  if ((isDashboard || isAdmin) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ❌ Logged in → block auth pages (LOGIN / REGISTER)
  if ((isLogin || isRegister) && token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.role === ROLES.ADMIN) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }

      return NextResponse.redirect(new URL("/dashboard", request.url));
    } catch (err) {
      // invalid token → clear and allow login page
      const res = NextResponse.next();
      res.cookies.delete("token");
      return res;
    }
  }

  // Role-based access control
  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (isAdmin && decoded.role !== ROLES.ADMIN) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } catch (err) {
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}
