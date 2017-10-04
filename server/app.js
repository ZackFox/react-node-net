import express from 'express';
import path from 'path';
import webpack from 'webpack';
import whm from 'webpack-hot-middleware';
import wdm from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const app = express();
app.use(express.static(path.join(__dirname, '../public/')));

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(
    wdm(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
    })
  );
  app.use(whm(compiler));
}

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(5000, () => console.log('server started!'));
