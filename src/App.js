import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News pageSize={6} country="in" key=".." category="general" />}
          />

          <Route
            exact
            path="/business"
            element={<News pageSize={6} country="in" key="business" category="business" />}
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News pageSize={6} country="in" key="entertainment" category="entertainment" />
            }
          />

          <Route
            exact
            path="/general"
            element={<News pageSize={6} country="in" key="general" category="general" />}
          />

          <Route
            exact
            path="/health"
            element={<News pageSize={6} country="in" key="health" category="health" />}
          />

          <Route
            exact
            path="/science"
            element={<News pageSize={6} country="in" key="science" category="science" />}
          />

          <Route
            exact
            path="/sports"
            element={<News pageSize={6} country="in" key="sports" category="sports" />}
          />

          <Route
            exact
            path="/technology"
            element={<News pageSize={6} country="in" key="technology" category="technology" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
