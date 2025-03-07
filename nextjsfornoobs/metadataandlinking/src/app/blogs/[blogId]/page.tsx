import { Metadata } from "next";

// This is an example of params and searchParams in server component
type Props = {
  params: Promise<{ blogId: string }>,
  searchParams: Promise<{ lang?: string }>
}

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
 const { blogId } = (await params);
  return {
    title: `blog ${blogId}`
  }
}

const Blog = async({params, searchParams}: Props) => {
  const { blogId } = await params;
  const lang = (await searchParams).lang

  return (
  <div>Blog #{blogId} in {lang}</div>
  )

}

export default Blog
