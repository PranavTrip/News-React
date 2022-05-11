import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";

export default class News extends Component {
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
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=86548911a6bf479a80a0dbfba8aa523c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
    // console.log(parsedData);
  }
  handleNextClick = async () => {
    // console.log("Next Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=86548911a6bf479a80a0dbfba8aa523c&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  handlePreviousClick = async () => {
    // console.log("Previous Clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=86548911a6bf479a80a0dbfba8aa523c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsMonkey - Top Headlines</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              let { title, description, urlToImage, url } = element;
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
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)
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
