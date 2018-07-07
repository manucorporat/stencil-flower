exports.config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
