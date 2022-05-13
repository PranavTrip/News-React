import React from "react";

const NewsComponent = (props) => {
  let { title, description, urlToImage, url, author, publishedAt, source } =
    props;
  return (
    <>
      <div className="my-4">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={urlToImage}
            className="card-img-top"
            alt="Image Not Found"
            style={{ height: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
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
};
export default NewsComponent;
