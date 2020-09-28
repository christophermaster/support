import logger from "./helpers/logins/login.helper";
import { startServer } from './app';
const path = __dirname + 'upload/env/config/dev.env';
require('dotenv').config({ path: path })
/**
 * Autor: Christopher siverio
 * fecha: 16-09-2020
 */
export const server_Upload = async () => {

  await startServer(process.env.UPLOAD || 5000);
  logger.debug("Servidor iniciado", process.env.UPLOAD || 5000);
}


