import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser'
import Routers from './routers/Upload.routers'
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*'
}

/**
 * Autor: Christopher siverio
 * fecha: 16-09-2020
 */
export async function startServer(port: any = 4000) {

  // Middleware
  app.use(morgan('tiny'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Rutas
  app.post('/webhook', (req, res) => {
    //console.log(req.body)
    res.send('Extractor de APPS!');
  });

  app.use('/api/v1', cors(corsOptions), Routers);
  app.listen(port);

  return app;

}

