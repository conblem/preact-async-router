const { default: Router, ssr } = require("../dist/jest");
const { h } = require("preact");
const render = require("preact-render-to-string");

describe("preact", () => {
  it("it should ssr route", async () => {
    const Component = Promise.resolve(() => "Test");

    const route = await ssr(
      "/",
      <Router>
        <Component default />
      </Router>
    );

    expect(render(route)).toBe("Test");
  });
});
