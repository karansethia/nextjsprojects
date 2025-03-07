import { comments } from "../data"
export const GET = async(_req: Request, 
  {params}: { params: Promise<{id: string}> }) => {
  const { id } = await params

  const comment = comments.find(com => com.id === parseInt(id))

  return Response.json(comment)
}

export const PATCH = async(req: Request, 
  {params}: { params: Promise<{id: string}> }) => {

const {id} = await params;
  const { text } = await req.json()

  const index = comments.findIndex(com => com.id === parseInt(id))

  comments[index].text = text;

  return Response.json(comments[index])

}

export const DELETE = async(_req: Request, 
  {params}: { params: Promise<{id: string}> }) => {

const {id} = await params;

  const index = comments.findIndex(com => com.id === parseInt(id))
  const deletedComment = comments[index]
  comments.splice(index,1)

  return Response.json(deletedComment)

}

