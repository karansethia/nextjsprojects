import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)
  // console.log(requestHeaders.get("Authorization"))
  
  const headersList = await headers();
  const cookieStore = await cookies();

  cookieStore.set("resultsPerPage", "20")
  console.log(cookieStore.get("resultsPerPage"))

  const theme = request.cookies.get("theme")
  console.log(theme)

  console.log(headersList.get("Authorization"))

  return new Response("Auth route", {
    headers: {
      "Set-Cookie": "theme=dark"
    }
  })
}
