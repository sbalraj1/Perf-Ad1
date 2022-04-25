import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Download from "./components/download";
import Home from "./components/home";


ReactDOM.render(
  <Router basename="/perfadcoolbeans2">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="download" element={<Download />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </Router>,
  //<App />,
  document.getElementById("root")
);
