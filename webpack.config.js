// webpack.config.js
import path from "path";

module.exports = {
  // Other webpack configurations...

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@api": path.resolve(__dirname, "src/api"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@store": path.resolve(__dirname, "src/store"),
      // Add more aliases as needed
    },
  },
};
