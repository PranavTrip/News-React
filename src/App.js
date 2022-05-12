import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  country = "in";
  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="health"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="science"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="sports"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
