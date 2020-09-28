const fetch = require('node-fetch');

/**
 * Autor: Christopher siverio
 * fecha: 26-07-2020
 */
class Validate {

    /**
     * Metodo que se encarga de quitar los parametros por las cuales no se filtraran
     * @param param parametros para las busquedas de la api
     */
    static quitarParametrosVacios(param: any) {

        for (var clave in param) {
            if (!param[clave]) {
                delete param[clave] //eliminamos solo las claves vacias
            }
        }

        return param;
    }

    //Metodo para la construccion de rutas 
    static buildUrl(url: String, param: any) {

        let query = Object.keys(param)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(param[k]))
            .join('&');

        const link = url + '?' + query;

        return link;
    }

    //Validar el token a usar
    static validateToken(token: any) {
        return new Promise((resolve, reject) => {
            fetch(`https://graph.facebook.com/v8.0/me?access_token=${token}`).then((res: any) => res.json()).then((res: any) => {
                if (res.error) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            }).catch((err: any) => {
                resolve(false);
            })
        })
    }


}

export default Validate;