"use strict";

const baseConfig = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.less$/,
        use: [{ loader: "css-loader" }, { loader: "less-loader" }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.([ot]tf|woff(2)|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: ["[name]"],
    libraryTarget: "umd",
  },
  externals: ["react", "react-dom"],
  plugins: [],
  optimization: {},
};

function createConfig(entry, name) {
  return {
    ...baseConfig,
    entry: {
      [name]: entry,
    },
    output: {
      ...baseConfig.output,
      path: path.resolve(baseConfig.output.path, name),
    },
  };
}

// Entry list
const core = createConfig("./src/index.ts", "core");

module.exports = (env, args) => {
  return [core];
};
