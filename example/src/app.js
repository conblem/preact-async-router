import { h } from "preact";

import Router, { Link } from "../../dist/index.m.js";

const CounterPromise = import("./Counter").catch(console.error);
const Home = Promise.resolve("div");

export const Routes = ({ history }) =>
  h(
    Router,
    { history },
    h(Home, { path: "/home" }, "Home"),
    h(Home, { path: "test" }, "Test"),
    h(CounterPromise, { path: "/counter" })
  );

const App = ({ children }) =>
  h(
    "div",
    { id: "app" },
    h("h1", {}, "Example"),
    h(Link, { href: "/test" }, "Test Link"),
    h(Link, { href: "/home" }, "Home Link"),
    h(Link, { href: "/counter" }, "Counter Link"),
    children
  );

export default App;
