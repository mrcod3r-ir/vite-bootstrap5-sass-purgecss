import htmlPurge from "vite-plugin-html-purgecss";
import handlebars from "vite-plugin-handlebars";

const path = require("path");
export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [
    htmlPurge(),
    handlebars({ partialDirectory: path.resolve(__dirname, "src/partials") }),
  ],
  server: {
    port: 8080,
    hot: true,
  },
};
