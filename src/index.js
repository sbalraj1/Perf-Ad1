import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Downlaod from "./components/download";


ReactDOM.render(
  <Router basename="/perfadcoolbeans2">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="download" element={<Downlaod />} />
      </Route>
    </Routes>
  </Router>,
  //<App />,
  document.getElementById("root")
);
