import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import whm from 'webpack-hot-middleware';
import wdm from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
// import passport from './config/passport';
import routes from './routes';

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '../public/')));

// ----------------- react HOT middleware ------------
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
// ---------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), () => console.log('server started!'));
