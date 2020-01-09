const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");
const path = require("path");


module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: "babel-loader",
        // may or may not need this line depending on your app"s setup
        options: {
          plugins: ["@babel/plugin-transform-react-jsx"],
         },
      },
      {
        loader: "@mdx-js/loader",
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  config.module.rules.find(
    rule => rule.test.toString() === "/\\.css$/",
  ).exclude = /\.module\.css$/;

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
          sourceMap: true,
          importLoaders: 1,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: path.join(__dirname, "./postcss.config.js")
          }
        }
      }
    ],
  });

  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre",
  });
  return config;
}
