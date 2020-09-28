// rutas y claves necesarias para el proyecto
const os = require('os');

const environment = {
    historico: 2,
    periodico: 6,
    ruta: os.homedir() + '/Desktop/archivo/zendesk/'
}

export default environment;