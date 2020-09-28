import Zendesk from '../../api/Zendesk.api';
import Constants from '../env/util/Constants';
import Query from '../../db/querys/Zendesk.querys'

/**
 * Autor: Christopher siverio
 * fecha: 16-09-2020
 */
class UploadServices {

    static async uploadFile(response: any) {

        let upload: any = [];
       
        for (let index = 0; index < response.length; index++) {
            upload.push(await Zendesk.uploadFile(response[index]));
        }
       
        return upload;
    }

    static async updateTickets(body: any) {

        let response: any;

        try {

            response = await Query.updateTicket(body.id_ticket, body.subject, body.description,new Date(), body.status);

            if(response){
                await Query.createNotifications(body.id_ticket,"ACT_TICKETS");
                return true;
            }
            return false;
            
        } catch (error) {
            return false;
        }
    }

    static async createComments(body: any) {
        
        let response: any;

        try {

            response = await Query.createNotifications(body.id_ticket,"ACT_TICKETS");

            if(response){
                return true;
            }

            return false;
            
        } catch (error) {
            return false;
        }
    }

}

export default UploadServices;