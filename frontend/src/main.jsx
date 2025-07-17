import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CglContextProvider from "./context/CglContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CglContextProvider>
      <App />
    </CglContextProvider>
  </BrowserRouter>
);
