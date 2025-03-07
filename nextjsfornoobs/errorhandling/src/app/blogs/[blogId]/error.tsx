"use client"

import React from 'react'

const BlogError = ({ error, reset }: {
  error: Error,
  reset: () => void
}) => {
  return (
    <div>
      <div>Something went wrong in blog</div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default BlogError
