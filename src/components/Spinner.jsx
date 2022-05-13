import React from "react";
import loading1 from "./loading1.svg";
import "../App.css";

const Spinner = () => {
  return (
    <>
      <div className="spinner-container">
        <img src={loading1} alt="loading" />
      </div>
    </>
  );
};
export default Spinner;