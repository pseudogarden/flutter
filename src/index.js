/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import express from 'express';
import passport from 'passport';
import cors from 'cors';
import errorhandler from 'errorhandler';
import morgan from 'morgan';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import env from './env';
import routes from './routes';

const production = env.NODE_ENV === 'production';

// Create global app object
const app = express();

app.use(passport.initialize());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
if (!production) app.use(errorhandler());

// connect app to routes
app.use('/api', routes);

// development error handler
if (!production) {
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// routes
app.use(routes);
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to Flutterwave payment test',
}));
app.all('*', (req, res) => res.send({ message: 'route not found' }));

// start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
