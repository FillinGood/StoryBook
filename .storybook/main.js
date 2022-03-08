module.exports = {
  "stories": [
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen'
  },
  webpackFinal: async (config, { configType }) => {
    const lessRule = {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader'},
      ],
    }
    config.module.rules.push(lessRule);
    return config;
  },
}