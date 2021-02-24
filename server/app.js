import 'express-group-routes';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
const route = app;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Route Group
route.group('/api/v1', (router) => {
  // localhost:3000/api/v1/hai
  router.get('/hai', (req, res, next) => {
    res.send('<h1>Halo Dunia</h1>');
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
