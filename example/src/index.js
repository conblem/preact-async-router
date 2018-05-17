import { h, render } from "preact";
import App, { Routes } from "./app";

render(
  <App>
    <Routes />
  </App>,
  document.body,
  document.querySelector("#app")
);

console.log("rendered");
