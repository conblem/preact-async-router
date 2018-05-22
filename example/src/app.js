import "regenerator-runtime/runtime";
import { h } from "preact";

import Router, { Link } from "../../dist/index.m.js";
import { StoreProvider, actions } from "./store";

const CounterPromise = import("./Counter");
const Home = Promise.resolve("div");

const Routes = ({ history }) =>
  h(
    Router,
    { history },
    h(Home, { path: "/home" }, "Home"),
    h(Home, { path: "test" }, "Test"),
    h(CounterPromise, { path: "/counter" })
  );

const App = ({ children }) =>
  h(
    StoreProvider,
    {},
    h(
      "div",
      { id: "app" },
      h("h1", {}, "Example"),
      h(Link, { href: "/test" }, "Test Link"),
      h(Link, { href: "/home" }, "Home Link"),
      h(Link, { href: "/counter" }, "Counter Link"),
      children
    )
  );

export default App;
export { actions, Routes };
