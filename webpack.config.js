module.exports = {
  entry: getEntrySources(['./src/js/index.jsx']),
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {

    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool:'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};


function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}