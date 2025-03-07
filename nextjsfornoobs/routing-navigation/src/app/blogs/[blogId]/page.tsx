import React from 'react'

const BlogDetails = async({ params }: {
  params: Promise<{blogId: string}>
}) => {

  const id = (await params).blogId

  return (
    <div>Details for blog #{id}</div>
  )
}

export default BlogDetails
