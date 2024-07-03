import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../dist/main.css";
import Navbar from "./layout/Navbar.jsx";
import styles from "./App.module.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={styles.container}>
      <Navbar />
      <App />
    </div>
  </React.StrictMode>
);
