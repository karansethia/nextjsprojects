import { NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async(request: NextRequest) => {

  const query = request.nextUrl.searchParams;

  const searchParam = query.get("query")
const filteredComments = searchParam ? comments.filter(com => com.text.includes(searchParam)) : comments
  return Response.json(filteredComments)
}

export const POST = async(req: Request) => {
const body = await req.json()
  const newComment = {
    id: comments.length + 1,
    text: body.text
  }
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json"
    },
    status: 201
  })
}
