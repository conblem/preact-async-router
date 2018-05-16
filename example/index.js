const express = require("express");
const app = express();
const { promisify } = require("util");
const { join } = require("path");
const readFile = promisify(require("fs").readFile);
const render = require("preact-render-to-string");
const { h } = require("preact");
const { createMemoryHistory } = require("history");

const { ssr } = require("../dist/");
const { default: Frontend, Routes } = require("./dist/app.js");

const templateFile = join(__dirname, "index.template.html");
let template;

const staticPath = join(__dirname, "dist");
app.use("/dist", express.static(staticPath));

app.get("*", ({ url }, res) => {
  console.log(url);
  ssr(url, Routes({ history: createMemoryHistory() }))
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
