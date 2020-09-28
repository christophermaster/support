
/**
 * Autor: Christopher siverio
 * fecha: 28-07-2020
 */
class ValidateParams {

    static headerCtxDailyTrendsAndRealTimeTrends(ctx:any) {
        return  ctx.Country && ctx.Language;
    }
    
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
}

export default ValidateParams;