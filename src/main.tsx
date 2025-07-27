import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
// import Test from "./Test.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        {/* <Test /> */}
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
