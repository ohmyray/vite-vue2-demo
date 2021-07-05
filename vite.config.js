import { defineConfig } from "vite";
import { resolve } from "path";

const { createVuePlugin } = require("vite-plugin-vue2");
import { viteMockServe } from 'vite-plugin-mock';
import esbuildPlugin from "esbuild-plugin-vite-element-ui";

export default defineConfig({
    resolve: {
        alias: {
            src: resolve(__dirname, "./src/"),
            "src/": resolve(__dirname, "./src"),
            '@/': resolve(__dirname, './src')
        },
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
            mockPath: 'mock',
            localEnabled: true,
        }),
    ],
    optimizeDeps: {
        esbuildOptions: {
            plugins: [esbuildPlugin()],
        },
    }
});
