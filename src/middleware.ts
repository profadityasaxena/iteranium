import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const existingRegion = request.cookies.get("region");

  // .ca domain: always enforce Canada region
  if (host.endsWith(".ca") || host.includes(".ca:")) {
    if (existingRegion?.value !== "ca") {
      const response = NextResponse.next();
      response.cookies.set("region", "ca", {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
        sameSite: "lax",
      });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|images).*)",
};
