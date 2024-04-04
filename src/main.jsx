import React from "react";
import ReactDOM from "react-dom/client";
import {ReactRouter} from 'react-router-dom'
import './index.scss';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactRouter>
      <App />
    </ReactRouter>
  </React.StrictMode>
);
