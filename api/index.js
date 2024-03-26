import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import coloresRouter from './src/routes/colors.routes.js';
import './src/database/dabatase.js';



const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', coloresRouter);


app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});