import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel";

const baseconfig = () => ({
  entry: "src/index.js",
  sourceMap: "inline",
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
});

export default [
  {
    ...baseconfig(),
    format: "cjs",
    dest: "dist/index.js"
  },
  {
    ...baseconfig(),
    format: "es",
    dest: "dist/index.m.js"
  },
  {
    ...baseconfig(),
    format: "cjs",
    entry: "example/src/app.js",
    dest: "example/dist/app.js"
  },
  {
    ...baseconfig(),
    format: "iife",
    entry: "example/src/index.js",
    dest: "example/dist/index.js"
  }
];
