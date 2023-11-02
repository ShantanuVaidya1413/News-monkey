import React from 'react'

const NewsItem = (props) => {

  const { title, description, imgUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card" style={{ marginRight: "0.7rem", marginLeft: "0.7rem" }}>

        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{ left: "85%", zIndex: '1', fontSize: "1rem" }}>{source}</span>
        <img src={imgUrl} className="card-img-top" alt="..." style={{ minHeight: "18rem", maxHeight: "18rem" }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem