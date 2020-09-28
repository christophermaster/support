import envarioment from '../../env/util/envarioment'
import logger from "../../helpers/logins/login.helper";

var fs = require('fs-extra');
var moment = require('moment');

/**
 * Autor: Christopher siverio
 * fecha: 16-07-2020
 */
export const generateFileLocal = (json: any, name: any) => {

    const date: Date = new Date();
    const url: String = envarioment.ruta + `${name}_${moment(date).format("YYYYMMDDHHmmss")}${Math.random()}.json`;
    let bandera: Boolean = false;

    fs.stat(envarioment.ruta, function (err: any) {
        if (err == null) {
            bandera = true;
        } else if (err.code == 'ENOENT') {
            if (err.code == 'ENOENT') {
                fs.mkdirSync(envarioment.ruta, "0766", function (err: any) {
                    if (err) {
                        logger.debug("Error a crear carpeta local");

                    }
                });
                bandera = true;
            }
        } else {
            logger.debug("Error a crear archivo local");
        }

        if (bandera) {
            fs.writeFile(url, JSON.stringify(json), function (err: any) {
                if (err) {
                    return console.log(err);
                }
                logger.debug("Archivo local creado");

            });
        }

    });
}