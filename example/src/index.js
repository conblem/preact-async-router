import { h, render } from "preact";
import App, { Routes } from "./app";

render(
  <App>
    <Routes />
  </App>,
  document.body,
  document.body.lastChild
);

console.log("rendered");
