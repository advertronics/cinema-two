import React from "react"
import { shows } from "@/data"

const ShowDescription = ({ showId }: { showId: string }) => {
  const thisShow = shows.find(show => show.urlTitle == showId)

  return (
    <section className="movie-description | section-padding">
      <div className="container">
        <div className="movie-info-box">
          <h2 className="movie-title">{thisShow?.title}</h2>
          <div className="movie-features">
            <p className="release-date">Feb 2024</p>
            <div className="high-def-tag">
              {thisShow?.qualityInWords}
              <b>Ultra HD</b>
            </div>
            <p className="playtime">1 hr 21 min</p>
            <div className="creative-commons">cc</div>
            <p className="category">{thisShow?.category}</p>
          </div>
          <p className="the-description">That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town twisted secrets.</p>
          <ul className="production-info">
            <li>
              <h6>Director</h6>: <span>Mark Njoroge</span>
            </li>
            <li>
              <h6>Casting</h6>: <span>Philip Njenga</span>
            </li>
            <li>
              <h6>Production</h6>: <span>Paul Mburu</span>
            </li>
          </ul>
        </div>
        <div className="movie-thumbnail">
          <img src={thisShow?.thumbnail} alt="Teenage Fantasy" />
        </div>
      </div>
    </section>
  )
}

export default ShowDescription
