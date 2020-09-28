import logger from "./helpers/logins/login.helper";
import 'reflect-metadata';
import { startServer } from './app';
import Zendesk from './helpers/api/Zendesk.helpers'
import {server_Upload} from "./upload-webhook/server"

/**
 * Autor: Christopher siverio
 * fecha: 24-07-2020
 */
async function main() {
  await startServer(process.env.PORT_GRAPHQL || 5001);
  logger.debug("Servidor iniciado", process.env.PORT_GRAPHQL || 5001);
  
}

main();
server_Upload();

/*const param1 = {

    user_id:"1",
    subject: "Prueba 2 ticket de prueba",
    description: "cuenta de teamknowlogy2020.",
    token_file:  "laIPfXtP0TA4VGkz1DPFxQHUP,wwpPDRGZu9G7l15eL9YLy1oRc",
    priority: "urgent",
    recipient:"christopherfacyt@gmail.com"
    //assignee_id:421306433414,
}*/
//Zendesk.getAllTicketsFromBD()
/*Zendesk.createCommentsFromBD({
  
  token_user:"ff28b53ef7a3fc1539795d86d2d5451f8fc07c381112773e63a13b7300ae426e",
  id_ticket:14,
  IdComentario:2,
  Comentario:"probando query" ,
  URLFile:"url"
});*/
/*Zendesk.getAllCommentsFromBD({
  token_user:"ff28b53ef7a3fc1539795d86d2d5451f8fc07c381112773e63a13b7300ae426e",
  id_ticket:14,
});*/
//Zendesk.createTicket(param1);
//Zendesk.getListMotive();
/*const param2 = {

  id_user:"1",
  id_ticket:42,
  description: "revisa por favor",
}
Zendesk.createCommentsOnATicket(param2)*/

/*const param3 = {
  id_ticket:"42",
}
Zendesk.getCommentsOnATicket(param3);*/

/*Zendesk.getTicket();

const param = {
  id_ticket:"42,41",
}

Zendesk.getTicketForId(param);*/

/*const param4 = {

    user_id:"1",
    id_ticket:"42",
    subject: "Prueba de Actualizar",
    description: "Ejemplo de prueba",
    token_file:  "qdZhqTtJGzWFoqgVJ5dhnO4zr",
    priority: "urgent",
}

Zendesk.updateTicket(param4);

const param = {
  id_ticket:"10,11,12",
}

Zendesk.deleteTickets(param);
//Zendesk.getTicketForTokenUser("");*/
