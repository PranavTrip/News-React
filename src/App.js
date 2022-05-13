import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=> {
  const pageSize = 6;
  const country = "in";
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
 

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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
                  pageSize={pageSize}
                  country={country}
                  setProgress={setProgress}
                  apiKey={apiKey}
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

export default App;