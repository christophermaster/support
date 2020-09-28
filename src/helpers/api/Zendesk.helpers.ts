import ZendeskApi from '../../api/Zendesk.api';
import Mapeo from '../../utils/Mapeo.utils';
import { generateFileLocal } from '../file/GenerateFileLocal.helper';
import Query from '../../db/querys/Zendesk.querys'
var moment = require('moment');

class ZendeskHelper {

    /**
     * TICKETS
     */

    //Crear Ticket -
    static async createTicket(param: any) {

        let response: any = {};

        const ticket = {
            ticket: {
                subject: param.subject,
                comment: {
                    body: param.description,
                    uploads: param.token_file.split(',')
                },
                recipient: param.email,
            }
        };
        response = await ZendeskApi.createTicket(ticket);
        //console.log(response);
        response = Mapeo.mapeoTicket(response, true);
        //Guardar Ticket
        if (response.length > 0) {
            response = response[0];
            const sql = await Query.createTicket(param.token_user, response.id, param.id_problem, param.description, moment(new Date()).format("YYYY-MM-DD HH:mm:ss.SSSSSS"), response.status, param.email);
        }

        return response;
    }

    //obtener los tickets de base de datos -LO USO PERO LO QUITARE
    static async getAllTicketsFromBD() {

        let response: any = [];

        response = await Query.getAllTickets();

        return response;
    }

    //obtener los tickets por TOKEN de usuario
    static async getTicketForTokenUser(param: any) {

        let response: any = {};
        response = await Query.getAllTicketsForTokenUser(param.token_user);
        //console.log(response)
        return response;

        /*let response: any = [];
        let id_ticket: any = [];
        let tickets: any = [];
        let delete_id_ticket: any = [];
 
        response = await Query.getAllTicketsForIdUser(param.id_user);
 
        if (response) {
            for (let index = 0; index < response.length; index++) {
                id_ticket.push(response[index].id_ticket)
            }
            id_ticket = id_ticket.toString();
            tickets = await this.getTicketForId({ id_ticket });
        }
 
        if (tickets.length > 0) {
            id_ticket = id_ticket.split(',');
            for (let index = 0; index < id_ticket.length; index++) {
 
                if (tickets.filter((ticket: any) => ticket.id_ticket == id_ticket[index]))
                    delete_id_ticket.push(id_ticket[index]);
 
            }
        }
 
        if (delete_id_ticket.length > 0) {
            delete_id_ticket = delete_id_ticket.toString();
            await ZendeskApi.deleteTickets({ id_ticket: delete_id_ticket });
        }
 
        return response;*/
    }

    //Actualizar Ticket
    static async updateTicket(param: any) {

        let response: any = {};
        let sql: any = {};

        const ticket = {
            ticket: {
                status: param.status
            }
        }

        response = await ZendeskApi.updateTicket(ticket, param.id_ticket);
        response = Mapeo.mapeoTicket(response, true);
        response = response[0];

        if(response){
            sql = await Query.createTicket(param.token_user, param.id_ticket, param.id_problem, param.description, moment(new Date()).format("YYYY-MM-DD HH:mm:ss.SSSSSS"), param.status, param.email);
        }

        return response;
    }

    //

    /**
     * COMENTARIOS
     */

    //Crear comentarios sobre un ticket -
    static async createCommentsOnATicket(param: any) {

        let response: any = {};

        const comments = {
            ticket: {
                comment: {
                    body: param.description,
                    uploads: param.token_file.split(',')
                }
            }
        }

        response = await ZendeskApi.createCommentsOnATicket(comments, param.id_ticket);
        response = Mapeo.mapeoTicket(response, true);

        //generateFileLocal(response, "createCommentsOnATicket");
        return response;
    }
    //obtener lista de comentarios de un Ticket A TRAVES DE ZENDESK
    static async getCommentsOnATicket(param: any) {

        let response: any = {};
        let res: any;
        response.ticket = await Query.getAllTicketsForId(param.id_ticket);
        res = await ZendeskApi.getCommentsOnATicket(param.id_ticket);
        response.comments = Mapeo.mapeoComments(res);

        return response;
    }

    /***
     * 
     * 
     * 
     */

    //obtener lista de comentarios de un Ticket A TRAVES DE bd
    static async getAllCommentsFromBD(param: any) {

        let response: any = [];

        response = await Query.getAllComment(param.token_user, param.id_ticket);
        return response;
    }

    //obtener todos los tickets
    static async getTicket() {
        let response: any = {};

        response = await ZendeskApi.getTicket();
        response = Mapeo.mapeoTicket(response, false);
        generateFileLocal(response, "getTicket");

        return response;
    }

    //obtener los tickets por id 
    static async getTicketForId(param: any) {

        let response: any = {};

        response = await ZendeskApi.getTicketForId(param);
        response = Mapeo.mapeoTicket(response, false);
        // generateFileLocal(response, "getTicketForId");

        return response;
    }

    //obtener los tickets de base de datos
    static async createCommentsFromBD(param: any) {

        let response: any = [];

        response = await Query.createComment(param.token_user, param.id_ticket, param.IdComentario, param.Comentario, param.URLFile);
        // console.log("LLEga",response);
        return response;
    }



    //Eliminar Ticket
    static async deleteTickets(param: any) {
        let response: any = {};
        response = await this.getTicketForId(param)
        if (response) {
            await ZendeskApi.deleteTickets(param);
        }
        generateFileLocal(response, "deleteTickets");

        return response;
    }

    static async getListMotive() {
        let response: any = [];
        response = await Query.getListMotive();
        response = Mapeo.motive(response);
        return response;
    }

}

export default ZendeskHelper;