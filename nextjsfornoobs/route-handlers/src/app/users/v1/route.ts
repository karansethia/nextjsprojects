import { redirect } from "next/navigation"
import { usersV1 } from "../data"

export const GET = () => {
  redirect('/users/v2')
  Response.json(usersV1)
}
