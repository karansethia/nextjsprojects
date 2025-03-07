"use client"

import { use } from "react"

type Props = {
  params: Promise<{ articleId: string }>,
  searchParams: Promise<{ lang?: string }>
}

const SingleArticle = ({ params, searchParams }: Props) => {
  const { articleId } = use(params);
  const { lang="en" } = use(searchParams)
  return (
    <div>Article #{articleId} in language: {lang}</div>
  )
}

export default SingleArticle
