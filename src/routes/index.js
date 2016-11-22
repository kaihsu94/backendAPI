import express from 'express';
import config from '../config';
import middleware from '../middleware';
import intializeDb from '../db';
import restaurant from '../controller/restaurant';

let router = express();

//connect to db
intializeDb(db => {

//middleware
  router.use(middleware({config,db}));

//api routes v1
router.use('/restaurant',restaurant({config,db}));
});

export default router;
