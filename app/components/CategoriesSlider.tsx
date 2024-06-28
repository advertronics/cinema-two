import React from "react"
import { shows } from "../../data"
import ShowCard from "./ShowCard"

const CategoriesSlider = () => {
  return (
    <section className="category-cards-slider | section-padding">
      <p className="small-section-title">in one website</p>
      <h1 className="section-main-title">All the shows you Love</h1>
      <div className="main-shows-slider-wrapper">
        <div className="show-slider">{shows && shows.map(show => <ShowCard key={show.id} show={show} />)}</div>
      </div>
    </section>
  )
}

export default CategoriesSlider
