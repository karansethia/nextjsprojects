import React from 'react'

// for eg if url format is /docs/conceptId/featureId/exampleId

const Docs = async({ params }: {
  params: Promise<{ slug: string[] }>
}) => {

  const { slug } = await params;
  if(slug?.length === 2){
// CASE: When we have conceptId and featureId but not exampleId
    return (
    <h1>Feature page of concept : {slug[0]} where feature id is {slug[1]}</h1>
    )
  }
  if(slug?.length === 1){
// CASE: When we have conceptId and featureId but not exampleId
    return (
      <>
        <h1>Feature page of concept : {slug[0]}</h1>
        <p>This is part of catch all segment route</p>
      </>
    )
  }

  return (
    <div>This is docs home page</div>
  )
}

export default Docs
