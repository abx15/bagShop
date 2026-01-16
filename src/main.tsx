import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ShopProvider } from "./context/ShopContext";

createRoot(document.getElementById("root")!).render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
