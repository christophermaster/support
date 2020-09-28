import ValidateParams from '../utils/ValidateParameter.utils'
import { uploadS3 } from '../helpers/file/UploadFileS3.helper';
import ZendeskHelper from '../helpers/api/Zendesk.helpers'
/**
 * Autor: Christopher siverio
 * fecha: 18-07-2020
*/
class ZendeskServices {

    //Crear Ticket
    static async createTicket(ctx: any) {
        let response: any = {};
        response = await ZendeskHelper.createTicket(ctx);

        return response;
    }

    //obtener los tickets de base de datos
    static async getAllTicketsFromBD(ctx: any) {

        let response: any = [];
        response = await ZendeskHelper.getAllTicketsFromBD();

        return response;
    }

    //Crear comentarios sobre un ticket
    static async createCommentsOnATicket(ctx: any) {

        let response: any = {};
        response = await ZendeskHelper.createCommentsOnATicket(ctx);

        return response;
    }

    //obtener lista de comentarios de un Ticket
    static async getCommentsOnATicket(ctx: any) {

        let response: any ={};
        response = await ZendeskHelper.getCommentsOnATicket(ctx);

        return response;
    }

    //obtener todos los tickets
    static async getTicket() {

        let response: any = {};
        response = await ZendeskHelper.getTicket();

        return response;
    }

    //obtener los tickets por id 
    static async getTicketForId(ctx: any) {

        let response: any = {};
        response = await ZendeskHelper.getTicketForId(ctx);

        return response;
    }

    //obtener los tickets por id de Usuaruio
    static async getTicketForTokenUser(ctx: any) {
        let response: any = {};
        response = await ZendeskHelper.getTicketForTokenUser(ctx);

        return response;
    }

    //Actualizar Ticket
    static async updateTicket(param: any) {

        let response: any = {};
        response = await ZendeskHelper.updateTicket(param);

        return response;
    }

    //Eliminar Ticket
    static async deleteTickets(param: any) {

        let response: any = {};
        response = await ZendeskHelper.deleteTickets(param);

        return response;
    }

    //
    static async getListMotive(ctx: any) {

        let response: any = {};
        response = await ZendeskHelper.getListMotive();

        return response;
    }

}

export default ZendeskServices;