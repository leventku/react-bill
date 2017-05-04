module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader"
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  }
};
