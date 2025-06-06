import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Feedback from "./pages/Feedback.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path=":id" element={<Feedback />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
