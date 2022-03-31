import Express from 'express';
import morgan from 'morgan';

const app = Express();

//Setings
app.set('PORT', 3000);

//Middlewares
app.use(morgan('dev'));


export default app;