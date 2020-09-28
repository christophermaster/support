import Utilities from '../utils/Utilities.utils';
import { generateFileLocal } from '../helpers/file/GenerateFileLocal.helper';;
const fetch = require('node-fetch');

const path = __dirname + '/env/config/dev.env';
require('dotenv').config({ path: path })

const header: any = { Authorization: "Basic " + Utilities.base64(), 'Content-Type': 'application/json' };

class Zendesk {

    //Crear Ticket
    static async createTicket(param: any) {

        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json`;
            fetch(url, {
                method: 'post',
                body: JSON.stringify(param),
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    // Subir Archivo
    static async uploadFile(param: any) {

        const headers =  { Authorization: "Basic " + Utilities.base64(), 'Content-Type':param.mimetype, 'Content-Length':param.size };

        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/uploads.json?filename=${param.originalname}`;
            fetch(url, {
                method: 'post',
                body: param.buffer,
                headers: headers
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    //Crear comentarios sobre un ticket
    static async createCommentsOnATicket(param: any, id_ticket: any) {
        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets/${id_ticket}.json`;
            fetch(url, {
                method: 'put',
                body: JSON.stringify(param),
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    //obtener lista de comentarios de un Ticket
    static async getCommentsOnATicket(id_ticket: any) {
        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets/${id_ticket}/comments.json`;
            fetch(url, {
                method: 'get',
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    //obtener todos los tickets
    static async getTicket() {
        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json`;
            fetch(url, {
                method: 'get',
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    //obtener los tickets por id 
    static async getTicketForId(param: any) {
        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets/show_many.json?ids=${param.id_ticket}`;
            fetch(url, {
                method: 'get',
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    //obtener los tickets por id 
    static async getTicketForTokenUser(param: any) {
    }

    //Actualizar Ticket
    static async updateTicket(param: any, id_ticket: any) {
        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets/${id_ticket}.json`;
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(param),
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

    //Eliminar Ticket
    static async deleteTickets(param: any) {
        return await new Promise((res, rej) => {
            let url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/deleted_tickets/destroy_many?ids=${param.id_ticket}`;
            fetch(url, {
                method: 'delete',
                headers: header
            })
                .then((res: any) => {
                    return res.json()
                })
                .then((json: any) => {
                    res(json);
                })
                .catch((err: any) => {
                    rej(err);
                });
        })
    }

}
export default Zendesk;