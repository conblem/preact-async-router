import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import filesize from "rollup-plugin-filesize";
import uglify from "rollup-plugin-uglify-es";

const baseconfig = () => ({
  input: "src/index.js",
  plugins: [peerDepsExternal(), resolve(), commonjs(), uglify(), filesize()]
});

export default [
  {
    ...baseconfig(),
    output: {
      format: "cjs",
      sourcemap: true,
      file: "dist/index.js"
    }
  },
  {
    ...baseconfig(),
    output: {
      format: "es",
      sourcemap: true,
      file: "dist/index.m.js"
    }
  },
  {
    ...baseconfig(),
    output: {
      format: "cjs",
      sourcemap: "inline",
      file: "dist/jest.js"
    }
  }
];
