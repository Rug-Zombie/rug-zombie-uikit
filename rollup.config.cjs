const typescript = require("@rollup/plugin-typescript");
const url = require("@rollup/plugin-url");
const pkg = require("./package.json");

exports.input =  "src/index.ts";

exports.output = [
  { file: pkg.main, format: "cjs" },
  { file: pkg.module, format: "es" },
];

exports.plugins = [url(), typescript()];

