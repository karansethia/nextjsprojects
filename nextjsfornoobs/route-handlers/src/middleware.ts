import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("middleware running")
  // return NextResponse.redirect(new URL("/", request.url))
  return NextResponse.rewrite(new URL("/", request.url))
}

export const config = {
  matcher: "/profile"
}
