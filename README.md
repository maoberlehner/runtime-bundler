# runtime-bundler

[![Patreon](https://img.shields.io/badge/patreon-donate-blue.svg)](https://www.patreon.com/maoberlehner)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/maoberlehner)
[![GitHub stars](https://img.shields.io/github/stars/maoberlehner/runtime-bundler.svg?style=social&label=Star)](https://github.com/maoberlehner/runtime-bundler)

> Runtime Bundling of JavaScript Assets

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/O4O7U55Y)

`runtime-bundler` is a collection of tools to enable bundling JavaScript assets server-side or serverless.

## Usage

```bash
npm install runtime-bundler
```

```js
// Usage with express
const { runtimeBundlerMiddleware } = require('runtime-bundler');

const app = express();

// The `assetDirectory` is the path to the assets relative to the current file.
app.use('/js', runtimeBundlerMiddleware({ assetDirectory: './public/' }));
```

## About

### Author

Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner  
Patreon: https://www.patreon.com/maoberlehner

### License

MIT
