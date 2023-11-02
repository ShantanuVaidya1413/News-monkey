import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    console.log(page)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5670524132d0463094ae30327487fd1c&page=${page}&pageSize=${props.pageSize}`

    setLoading(true)

    const data = await fetch(url)
    const parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    console.log(page)
  }

  useEffect(() => {
    document.title = `${props.category} - NewsMonkey`
    updateNews()

  }, [])

  const handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5670524132d0463094ae30327487fd1c&page=${page-1}&pageSize=${props.pageSize}`

    setLoading(true)

    const data = await fetch(url)
    const parsedData = await data.json()

    setArticles(parsedData.articles)
    setPage(page-1)
    setLoading(false)

    // setPage(page-1)
    // updateNews()
  }

  const handleNextClick = async () => {

    // if(!(page >= Math.ceil(totalResults/props.pageSize))){
    //   setPage(page+1)
    //   // console.log(page)
    //   updateNews()
    // }
    if (!(page >= Math.ceil(totalResults / props.pageSize))) {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5670524132d0463094ae30327487fd1c&page=${page + 1}&pageSize=${props.pageSize}`

      setLoading(true)

      const data = await fetch(url)
      const parsedData = await data.json()

      setArticles(parsedData.articles)
      setPage(page+1)
      setLoading(false)
      
    }
  }


  return (
    <div className="container my-3" >
      <h1 className="text-center" style={{ marginBottom: "2.4rem", marginTop: "4rem" }} >NewsMonkey - Top {props.category} headlines</h1>

      {/* is loading is true then show loading spinner */}
      {loading && <Spinner />}

      <div className="row">
        {/* if loading is true then dont display any content */}
        {!loading && articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : "https://imgeng.jagran.com/images/2023/jul/samsung-galaxy-s23-series1690700599415.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>

      <div className="container d-flex justify-content-between">
        {/* if the page==1 then disable the previous button */}
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>
        {/* if the page is last then disable the next button */}
        <button disabled={page >= Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>
      </div>

    </div>
  )

}

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;

