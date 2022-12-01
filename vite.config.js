import htmlPurge from "vite-plugin-html-purgecss";

const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [htmlPurge()],
  server: {
    port: 8080,
    hot: true,
  },
};
