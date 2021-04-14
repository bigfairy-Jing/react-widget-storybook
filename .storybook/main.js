module.exports = {
  "stories": [ // storybook 文件在的位置,相对于当前文件
    "../doc/**/*.stories.mdx",
    "../doc/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [ // 
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app"
  ]
}