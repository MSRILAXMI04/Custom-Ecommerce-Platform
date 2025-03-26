import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Signin from "./Signin";
import Signup from "./Signup";
import Productpage from "./Productpage"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Signup/>
    <Signin/>
    <Productpage/>
  </React.StrictMode>
);
