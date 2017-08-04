import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

// app.get('/*', (req,res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, () => console.log('Running on localhost:3000'));