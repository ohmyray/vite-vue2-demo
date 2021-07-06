import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import esbuildPlugin from "esbuild-plugin-vite-element-ui";
const { createVuePlugin } = require("vite-plugin-vue2");

export default defineConfig({
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: "condense",
        },
      },
    }),
    viteMockServe({
      // default
      mockPath: "mock",
      localEnabled: true,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildPlugin()],
    },
  },
});
