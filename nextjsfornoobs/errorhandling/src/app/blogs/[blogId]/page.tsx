import React from 'react'

type Props = {
  params: Promise<{ blogId: string }>
}

const BlogPage = async ({ params }: Props) => {

  const blogId = (await params).blogId

  if (parseInt(blogId) > 100) {
    // notFound()
    throw new Error("Something went wrong")
  }

  return (
    <div>
      <p>Blog Page for blog #{blogId}</p>
    </div>
  )
}

export default BlogPage
