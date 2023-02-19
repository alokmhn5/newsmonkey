import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, details, imageUrl, url } = this.props;
    return (
      <div>
        <div className="card " style={{ width: "18rem", height: "auto" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt=""
            style={{ width: "18rem", height: "12rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {title ? title.slice(0, 70) : ""}...
            </h5>
            <p className="card-text">
              {details ? details.slice(0, 120) : ""}..
            </p>
            <a href={url} target="_alok" className="btn btn-primary">
              Read full news....
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
