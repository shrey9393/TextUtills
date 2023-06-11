import "./App.css";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";
import About from "./Components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.title = "TextUtils-DarkMode";
      document.body.style.backgroundColor = "#3f474f";
    } else {
      setMode("light");
      document.title = "TextUtils";
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextFrom heading="Enter text to analyze" mode={mode} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/any-other-path" element={<Navigate to="/about" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
