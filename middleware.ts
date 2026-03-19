// middleware.ts (project root, not inside app/)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/dashboard",
  "/dashboard/",
  "/post/create",
];

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user");
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );

  if (isProtected && !user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/post/create",
  ],
};