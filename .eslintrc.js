module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/prettier"],
  globals: {
    $: false,
    Vue: false,
    mapv: false,
    maptalks: false,
    echarts: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};