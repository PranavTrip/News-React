import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export default class News extends Component {
  notFoundImage =
    "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=86548911a6bf479a80a0dbfba8aa523c";
    //let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsMonkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              let {title,description,urlToImage,url}=element;
              return (
                <div className="col-md-4">
                  <NewsComponent
                    title={title}
                    description={description}
                    urlToImage={urlToImage?urlToImage:this.notFoundImage}
                    url={url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
