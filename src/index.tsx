import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChakraUI from "./ChakraUI";
import RadixUi from "./RadixUI";
import MyTabs from "./Headless";

import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ChakraUI />
      <RadixUi />
      <MyTabs />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
