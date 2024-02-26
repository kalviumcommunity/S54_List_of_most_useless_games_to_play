import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ParentContext from "./components/Context.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
     <ParentContext>
        <App />
      </ParentContext>
  </ChakraProvider>
);
