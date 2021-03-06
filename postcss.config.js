const path = require("path")

module.exports = () => ({
  plugins: [
    require("postcss-import")({
      root: path.join(__dirname, "./src/"),
      path: path.join(__dirname, "./src/components"),
    }),
    require("postcss-mixins"),
    require("postcss-each"),
    require("postcss-apply"),
    require("postcss-preset-env")({
      stage: 0, // required to get all features that were from cssnext
      features: {
        "custom-properties": {
          preserve: false, // required to output values instead of variables
          importFrom: [
            "./src/components/variables.module.css",
            "./src/components/colors.module.css",
          ],
        },
        "color-mod-function": true, // required to use color-mod()
      },
    }),
    require("postcss-calc"), // required as postcss-preset-env doesn"t have a reduce calc() funtion
    require("postcss-normalize"),
    require("postcss-reporter")({
      clearReportedMessages: true,
    }),
  ],
})
