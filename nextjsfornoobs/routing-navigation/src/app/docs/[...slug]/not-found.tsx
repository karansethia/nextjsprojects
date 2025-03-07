"use client"

import { usePathname } from "next/navigation"

const NotFound = () => {

  const pathname = usePathname()

  console.log(pathname)

  return (
    <div>Page not found</div>
  )
}

export default NotFound
