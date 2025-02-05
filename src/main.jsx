import { insertCoin } from "playroomkit";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Show Playroom lobby UI, Playroom will handle players joining etc and wait for host to tap "Launch"
insertCoin({
  skipLobby: true
}).then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);



