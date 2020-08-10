# Antony Moss Resume website

## Build assets



 "scripts": {
    "start": "webpack-dev-server --config ./build/webpack.config.js",
    "build": "NODE_ENV=production webpack --config ./build/webpack.config.js --mode=production",
    "deploy": "gh-pages -d dist"
  },
