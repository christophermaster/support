import { Resolver, Query, Ctx } from 'type-graphql';
import ZendeskServices from '../services/Zendesk.services';
import { Ticket } from '../models/zendesk/Ticket.model';
import { Comments } from '../models/zendesk/Comments.model';
import { Motive } from '../models/zendesk/Motive.model';
import { ListTickets } from '../models/zendesk/ListTickets.models';
import { ListComments } from '../models/zendesk/ListComments.models';


/**
 * Autor: Christopher siverio
 * fecha: 28-07-2020
 */
@Resolver()
export class ZendeskResolver {

    //Crear Ticket
    @Query(() => Ticket)
    async createTicket(
        @Ctx() ctx: any,
    ) {
        let response: any = {};
        response = await ZendeskServices.createTicket(ctx);
        return response;
    }

    //obtener los tickets de base de datos
    @Query(() => [ListTickets])
    async getAllTicketsFromBD(
        @Ctx() ctx: any,
    ) {
        let response: any = {};
        response = await ZendeskServices.getAllTicketsFromBD(ctx);

        return response;
    }

    //obtener los tickets por token de Usuaruio
    @Query(() => [ListTickets])
    async getTicketForTokenUser(
        @Ctx() ctx: any,
    ) {
        let response: any = {};
        response = await ZendeskServices.getTicketForTokenUser(ctx);

        return response;
    }

    //Actualizar Ticket
    @Query(() => Ticket)
    async updateTicket(
        @Ctx() ctx: any,
    ) {

        let response: any = {};
        response = await ZendeskServices.updateTicket(ctx);

        return response;
    }

    //Crear comentarios sobre un ticket
    @Query(() => Ticket)
    async createCommentsOnATicket(
        @Ctx() ctx: any,
    ) {

        let response: any = {};
        response = await ZendeskServices.createCommentsOnATicket(ctx);

        return response;
    }

    //obtener lista de comentarios de un Ticket
    @Query(() => [ListComments])
    async getCommentsOnATicket(
        @Ctx() ctx: any,
    ) {

        let response: any = [];
        response.push(await ZendeskServices.getCommentsOnATicket(ctx));

        return response;
    }

    //obtener todos los tickets
    @Query(() => [Ticket])
    async getTicket(
        @Ctx() ctx: any,
    ) {

        let response: any = {};
        response = await ZendeskServices.getTicket();

        return response;
    }

    //obtener los tickets por id 
    @Query(() => [Ticket])
    async getTicketForId(
        @Ctx() ctx: any,
    ) {

        let response: any = {};
        response = await ZendeskServices.getTicketForId(ctx);

        return response;
    }

    //Eliminar Ticket
    @Query(() => [Ticket])
    async deleteTickets(
        @Ctx() ctx: any,
    ) {

        let response: any = {};
        response = await ZendeskServices.deleteTickets(ctx);

        return response;
    }

    //motivo de Ticket
    @Query(() => [Motive])
    async getListMotive(
        @Ctx() ctx: any,
    ) {

        let response: any = {};
        response = await ZendeskServices.getListMotive(ctx);

        return response;
    }


}
