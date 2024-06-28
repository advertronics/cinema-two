import React from "react"

const Pagination = () => {
  return (
    <div className="pagination | container section-padding">
      <a href="" className="prev special page-numbers">
        &laquo;
        <span>Previous</span>
      </a>
      <a href="" className="page-numbers">
        1
      </a>
      <a href="" className="page-numbers current">
        2
      </a>
      <a href="" className="page-numbers">
        3
      </a>
      <a href="" className="page-numbers">
        4
      </a>
      <a href="" className="next special page-numbers">
        <span>Next</span>
        &raquo;
      </a>
    </div>
  )
}

export default Pagination
