import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

axios.defaults.baseURL =
  "https://quiet-scrubland-22380.herokuapp.com/api/v1/student";
// axios.defaults.headers["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua2l0dmFzaGlzaHQxMkBnbWFpbC5jb20iLCJfaWQiOiI2MDc0MGVkMjVjZmJiMTRmODhmNDQyMjUiLCJpYXQiOjE2MTk1MzIzNjcsImV4cCI6MTY1MDYzNjM2N30.8S-lKWf7DhvqKjT8HLoE99cGSWie_UYqEcIZs20yvyQ";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
