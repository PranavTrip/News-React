import React, { Component } from "react";
import loading1 from "./loading1.svg";
import "../App.css";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="spinner-container">
          <img
            src={loading1}
            alt="loading"
           
          />
        </div>
      </>
    );
  }
}
