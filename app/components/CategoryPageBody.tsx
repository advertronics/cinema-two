import React from "react"

const CategoryPageBody = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <section className="category-body | section-padding">{children}</section>
}

export default CategoryPageBody
