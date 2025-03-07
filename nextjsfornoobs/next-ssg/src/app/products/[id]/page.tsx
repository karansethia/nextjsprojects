// Generating Static content for some products
export const generateStaticParams = async() => {
  return [
    {id: "1"},
    {id: "2"},
    {id: "3"},
  ]
}

const SingleProduct = async ({ params }: {
  params: Promise<{ id: string }>
}) => {

  const { id } = await params

  return <div>SingleProduct #{id} generated at {new Date().toLocaleTimeString()}</div>;
};

export default SingleProduct;

