import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import css from "rollup-plugin-css-only";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "edit-text-editor",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    nodeResolve(), // This plugin allows use of external js or ts library 
    css({
      extract: true, // Extract CSS to a separate file
    }),
  ],
});
