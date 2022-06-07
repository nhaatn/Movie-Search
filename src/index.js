import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM is not longer supported in React 18
// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
