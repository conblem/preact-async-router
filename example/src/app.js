import { h } from "preact";

import Router, { Link } from "../../dist/index.m.js";

const Counter = import("./Counter")
  .then(module => module.default)
  .catch(console.error);
const Home = Promise.resolve("div");

export const Routes = ({ history }) => (
  <Router history={history}>
    <Home path="/home">Home</Home>
    <Home path="/test">Test</Home>
    <Counter path="/counter" />
  </Router>
);

const App = ({ children }) => (
  <div>
    <h1>Example</h1>
    <Link href="/test">Test Link</Link>
    |
    <Link href="/home">Home Link</Link>
    |
    <Link href="/counter">Counter Link</Link>
    {children}
  </div>
);

export default App;
