import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import emailClient from './emailClient';

const port = process.env.PORT || 3000;
let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(bodyParser.json());

// app.get('/*', (req,res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.use('/send', emailClient);


app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => console.log('Running on localhost:3000'));