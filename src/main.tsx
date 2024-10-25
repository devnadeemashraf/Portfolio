import "./index.css";

import { createRoot } from "react-dom/client";

import App from "@/app";

import RootProvider from "@/providers";

createRoot(document.getElementById("root")!).render(
  <RootProvider>
    <App />
  </RootProvider>
);
