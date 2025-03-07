export const dynamic = "force-static"

export const GET = async() => {
  const categories = [
    {id: 1, name: "Electronics"},
    {id: 2, name: "Books"},
    {id: 3, name: "Clothing"},
    {id: 4, name: "Home and Garden"},
  ]

  return Response.json(categories)
}
