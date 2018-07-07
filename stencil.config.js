exports.config = {
  outputTargets: [
    {
      type: 'www',
      dir: 'docs',
      serviceWorker: false,
      inlineLoaderScript: false,
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
