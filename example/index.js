const express = require("express");
const app = express();
const { promisify } = require("util");
const { join } = require("path");
const readFile = promisify(require("fs").readFile);
const render = require("preact-render-to-string");
const { h } = require("preact");
const { createBrowserHistory } = require("history");

const { ssr } = require("../dist/");
const { default: Frontend, Routes } = require("./dist/");

const templateFile = join(__dirname, "index.template.html");
let template;

app.use(express.static("dist"));

app.get("*", ({ url }, res) => {
  ssr(url, Routes({ history: createBrowserHistory() }))
    .then(route => {
      const html = render(h(Frontend, {}, route));
      res.send(template.replace("<!-- app -->", html));
    })
    .catch(console.error);
});

readFile(templateFile, "utf-8")
  .then(data => {
    template = data;
    app.listen(3000);
  })
  .catch(console.error);
