import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopcontextProvider from "./Context/ShopContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopcontextProvider>
      <App />
    </ShopcontextProvider>
  </StrictMode>
);
