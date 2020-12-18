const esbuild = require(`esbuild`);
const path = require(`path`);

async function esbuildBundler({ entryFile, options }) {
  let bundle = await esbuild.build({
    bundle: true,
    entryPoints: [entryFile],
    format: `esm`,
    minify: true,
    outdir: `./tmp`,
    splitting: true,
    target: `es6`,
    write: false,
    ...options,
  });
  return new TextDecoder(`utf-8`).decode(bundle.outputFiles[0].contents);
}

function runtimeBundlerMiddleware({
  assetDirectory = `/`,
  bundler = esbuildBundler,
  bundlerOptions = {},
  cache = null,
} = {}) {
  return async (request, response) => {
    let entryFile = path.join(assetDirectory, request.originalUrl);
    let cachedCode = cache && cache.get(entryFile);
    let code = await (cachedCode || bundler({ entryFile, options: bundlerOptions }));

    return response
      .status(200)
      .type(`text/javascript`)
      .send(code);
  };
}

module.exports = {
  esbuildBundler,
  runtimeBundlerMiddleware,
};
