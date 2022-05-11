import React, { Component } from "react";

export default class NewsComponent extends Component {
  render() {
    let { title, description, urlToImage, url, author, publishedAt, source } =
      this.props;
    return (
      <>
        <div className="my-4">
          <div className="card">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
              {source}
            </span>
            <img
              src={urlToImage}
              className="card-img-top "
              alt="Image Not Found"
              style={{ height: "10rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p class="card-text">
                <small class="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(publishedAt).toGMTString()}{" "}
                </small>
              </p>
              <a href={url} target="_blank" className="btn btn-sm btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
