import 'reflect-metadata'
import { container } from "tsyringe";
import LoggerHelper from './login4js.helper';

/**
 * Autor: Christopher siverio
 * fecha: 17-07-2020
 */

const loggerHelper = container.resolve(LoggerHelper);
const logger = loggerHelper.logger.getLogger('SQUINT-UPLOAD');

export default logger;
