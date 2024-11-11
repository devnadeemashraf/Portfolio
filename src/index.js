const { createRoot } = require("react-dom/client");

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
