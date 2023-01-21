import htmlPurge from "vite-plugin-html-purgecss";
import handlebars from "vite-plugin-handlebars";

const path = require("path");

const { fileURLToPath } = require("node:url");
const pageData = {
  "/index.html": {
    title: "Main Page",
  },
  "./src/pages/category.html": {
    title: "Category Page",
  },
};

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    htmlPurge(),
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: path.resolve(__dirname, "src/partials"),
    }),
  ],
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        category: path.resolve(__dirname, "src/pages/category.html"),
      },
    },
  },
};
