import React from "react"
import "./category-page.css"
import CategoryPageShowcase from "../../components/CategoryPageShowcase"
import CategoryPageBody from "../../components/CategoryPageBody"
import SpecialShowCard from "../../components/SpecialShowCard"
import Pagination from "../../components/Pagination"
import { categories } from "@/data"

const CategoryPage = ({ params }: { params: { categoryName: string } }) => {
  const categoryLink = params.categoryName.replace("-", " ")
  const actualCategory = categories.find(category => category.categoryName.toLocaleLowerCase() == categoryLink)

  //categories.map(category => console.log(category.categoryName.toLowerCase()))
  return (
    <>
      {actualCategory?.categoryName ? (
        <div>
          <CategoryPageShowcase actualCategory={actualCategory.categoryName} />
          <CategoryPageBody>
            <SpecialShowCard />
            <Pagination />
          </CategoryPageBody>
        </div>
      ) : (
        <h1 style={{ color: "white" }}>Page not found</h1>
      )}
    </>
  )
}

export default CategoryPage
