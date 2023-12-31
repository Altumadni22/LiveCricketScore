import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LiveScoreDetails from "./Components/LiveScoreDetails/LiveScoreDetails";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AppProvider } from "./Context";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/Live-score/:id"
            element=<ErrorBoundary>{<LiveScoreDetails />}</ErrorBoundary>
          />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
