exports.config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      dir: 'docs',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
