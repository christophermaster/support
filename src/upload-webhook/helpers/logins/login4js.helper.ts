import { injectable } from "tsyringe";
import log4js from 'log4js';

/**
 * Autor: Christopher siverio
 * fecha: 17-07-2020
 */
@injectable()
export default class Logger4JSHelper {

  public logger = log4js.configure({
    appenders: {
      out: { type: 'stdout' },
      app: { type: 'file', filename: 'squint.log' }
    },
    categories: {
      default: { appenders: ['out', 'app'], level: process.env.LOGGIN_LEVEL || "debug" }
    }
  });
  
}
