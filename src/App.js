import React,{Component} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize=40;
  country="in";
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News pageSize={this.pageSize} country={this.country} key=".." category="general" />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={this.pageSize}
                  country={this.country}
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
