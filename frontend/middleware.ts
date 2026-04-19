import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import type { JwtPayload } from "@/types/jwt";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  const isDashboard = pathname.startsWith("/dashboard");
  const isAdmin = pathname.startsWith("/admin");

  // ❌ Not logged in → redirect
  if ((isDashboard || isAdmin) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If token exists, validate role
  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      // ❌ Block non-admins from admin routes
      if (isAdmin && decoded.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    } catch (err) {
      // ❌ Invalid token → force login
      const res = NextResponse.redirect(new URL("/login", request.url));
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}

// Optional but recommended: limit middleware scope
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
