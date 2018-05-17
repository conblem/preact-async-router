import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel";

const baseconfig = () => ({
  input: "src/index.js",
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
    output: {
      format: "cjs",
      sourcemap: "inline",
      file: "dist/index.js"
    }
  },
  {
    ...baseconfig(),
    output: {
      format: "es",
      sourcemap: "inline",
      file: "dist/index.m.js"
    }
  },
  {
    ...baseconfig(),
    input: "example/src/app.js",
    output: {
      format: "cjs",
      sourcemap: "inline",
      file: "example/dist/app.js"
    },
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true
  },
  {
    ...baseconfig(),
    input: "example/src/index.js",
    output: {
      format: "iife",
      sourcemap: "inline",
      file: "example/dist/index.js"
    },
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true
  }
];
