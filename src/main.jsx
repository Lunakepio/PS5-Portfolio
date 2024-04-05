import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Content } from "./Content.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div
          style={{ background: "#000011", width: "100vw", height: "100vh" }}
        ></div>
      }
    >
      <App />
      <Content />
    </Suspense>
  </React.StrictMode>,
);
