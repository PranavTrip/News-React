import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  notFoundImage =
    "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

 updateNews= async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86548911a6bf479a80a0dbfba8aa523c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
 }

  async componentDidMount() {
    
    this.updateNews();
  }
  handleNextClick = async () => {
  this.updateNews();
  this.setState({ page: this.state.page + 1 });
  };
  handlePreviousClick = async () => {
    this.updateNews();
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center my-4">TheNewsRoom - Top Headlines</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              let { title, description, urlToImage, url, author, publishedAt,source } =
                element;
              return (
                <div className="col-md-4" key={url}>
                  <NewsComponent
                    title={title ? title.slice(0, 40) + "..." : "No Title"}
                    description={
                      description
                        ? description.slice(0, 70) + "..."
                        : "No Description"
                    }
                    urlToImage={urlToImage ? urlToImage : this.notFoundImage}
                    url={url}
                    author={author}
                    publishedAt={publishedAt}
                    source={source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            type="button"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page>
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            className="btn btn-dark"
            type="button"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
