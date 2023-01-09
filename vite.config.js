import htmlPurge from "vite-plugin-html-purgecss";
import handlebars from "vite-plugin-handlebars";

const path = require("path");

const pageData = {
  "/index.html": {
    title: "Bootstrap and Vite",
  },
  "/src/pages/category.html": {
    title: "Category Page",
  },
};

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
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
};
