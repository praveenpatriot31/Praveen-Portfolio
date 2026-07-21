import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css"; // Ensures architectural tailwind resets map cleanly to the DOM frame

// Safely isolates structural mounting context
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Application initialization failed: Target container DOM node '#root' was not found in the source document tree."
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);