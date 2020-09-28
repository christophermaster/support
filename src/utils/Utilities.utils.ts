const path = process.cwd() + '/src/env/config/dev.env';
require('dotenv').config({ path: path })

class Utilities {

    static base64() {
        let buff = Buffer.from(process.env.EMAIL+'/token:'+process.env.TOKEN);
        let base64data = buff.toString('base64');
        return base64data;
    }

}

export default Utilities;