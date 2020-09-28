import logger from "../../helpers/logins/login.helper";
import { dbConnection } from "../db_connection/connection.db"

class Query {

    // GUARDA LOS TICKETS EN BASE DE DATOS
    static async createTicket(TokenSession: any, id_ticket: any, id_problem: any, description: any,
        update_at: any, status: any, email: any) {

        var connection = dbConnection();
        connection.connect();

        const query = `CALL usp_usrInsertDeleteAcountTicket('${TokenSession}',${id_ticket},${id_problem},'${description}','${update_at}','${status}','${email}')`;

        try {

            return await new Promise((res, rej) => {
                connection.query(query, async (error: any, results: any, fields: any) => {
                    if (error) {
                        throw rej(error);
                    }
                    res(Object.values(JSON.parse(JSON.stringify(results)))[0]);
                });
                connection.end();
                logger.info(`Closing DB Connection`);
            });
        } catch (err) {
            console.log(err);
        }
    }
    // OBTINE TODOS LOS TICKETS
    static async getAllTickets() {

        var connection = dbConnection();
        connection.connect();

        const query = `CALL usp_usrGetAllDeleteAcountTicket()`;

        try {

            return await new Promise((res, rej) => {
                connection.query(query, async (error: any, results: any, fields: any) => {
                    if (error) {
                        throw rej(error);
                    }
                    res(Object.values(JSON.parse(JSON.stringify(results)))[0]);
                });
                connection.end();
                logger.info(`Closing DB Connection`);
            });
        } catch (err) {
            console.log(err);
        }

    }

    // OBTIENE TODOS LOS TICKETS DE USUARIO
    static async getAllTicketsForTokenUser(TokenSession: any) {
        var connection = dbConnection();
        connection.connect();

        const query = `CALL usp_usrGetAllDeleteAcountTicketById('${TokenSession}') `;

        try {

            return await new Promise((res, rej) => {
                connection.query(query, async (error: any, results: any, fields: any) => {
                    if (error) {
                        throw rej(error);
                    }
                    res(Object.values(JSON.parse(JSON.stringify(results)))[0]);
                });
                connection.end();
                logger.info(`Closing DB Connection`);
            });

        } catch (err) {
            console.log(err);
        }
    }

    // OBTIENE UN TICKETS POR SU id
    static async getAllTicketsForId(id_ticket: any) {

        var connection = dbConnection();
        connection.connect();

        const query = `SELECT 
            DA.IdUser,
            U.FirsName,
            U.MiddleName,
            U.SecondName,
            U.LastName,
            DA.IdTicket,
            DA.IdProblem,
            MB.Motivo,
            DA.Description,
            DA.CreateDate,
            DA.UpdateDate,
            DA.Status,
            DA.Email 
        FROM squintadmin.usrDeleteAcountTicket AS DA
        INNER JOIN usrUserProperties AS U ON U.IdUser = DA.IdUser
        INNER JOIN UsrMotivosBajaCuenta AS MB ON MB.Id = DA.IdProblem
        where DA.IdTicket = ${id_ticket}`;

        return await new Promise((res, rej) => {
            connection.query(query, async (error: any, results: any, fields: any) => {
                if (error) {
                    throw rej(error);
                }
                res(Object.values(JSON.parse(JSON.stringify(results)))[0]);
            });
            connection.end();
            logger.info(`Closing DB Connection`);
        });
    }

    // aCTUALIZA UN TICKET
    static async updateTicket(id_ticket: any, problem: any, description: any, update_at: any, status: any) {

        var connection = dbConnection();
        connection.connect();

        const query = `EXEC nombre_procedimiento ( ${id_ticket},${problem},${description},${update_at},${status});`;


        let newResult: any = [];

        return await new Promise((res, rej) => {
            connection.query(query, async (error: any, results: any, fields: any) => {
                if (error) {
                    throw rej(error);
                }

                for (let r of results) {
                    newResult.push(Object.assign({}, r));
                }
                res(newResult);
            });
            connection.end();
            logger.info(`Closing DB Connection`);
        });
    }

    // ELIMINA UN TICKET
    static async deleteTicket(id_user: any, id_ticket: any) {

        var connection = dbConnection();
        connection.connect();

        const query = `EXEC nombre_procedimiento (${id_user}, ${id_ticket});`;


        let newResult: any = [];

        return await new Promise((res, rej) => {
            connection.query(query, async (error: any, results: any, fields: any) => {
                if (error) {
                    throw rej(error);
                }

                for (let r of results) {
                    newResult.push(Object.assign({}, r));
                }
                res(newResult);
            });
            connection.end();
            logger.info(`Closing DB Connection`);
        });
    }

    /**
     * QUERY  DE COMENTARIOS
     */
    static async createComment(TokenSession: any, id_ticket: any, IdComentario: any, Comentario: any, URLFile: any) {

        var connection = dbConnection();
        connection.connect();

        const query = `CALL usp_usrInsertDeleteTicketsComment('${TokenSession}',${id_ticket},${IdComentario}, '${Comentario}','${URLFile}');`;

        let newResult: any = [];

        try {
            return await new Promise((res, rej) => {
                connection.query(query, async (error: any, results: any, fields: any) => {
                    if (error) {
                        throw rej(error);
                    }

                    res(Object.values(JSON.parse(JSON.stringify(results)))[0]);

                });
                connection.end();
                logger.info(`Closing DB Connection`);
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllComment(TokenSession: any, id_ticket: any) {

        var connection = dbConnection();
        connection.connect();

        const query = `CALL usp_usrGetDeleteTicketsCommentByTicketId('${TokenSession}', ${id_ticket});`;

        let newResult: any = [];

        try {
            return await new Promise((res, rej) => {
                connection.query(query, async (error: any, results: any, fields: any) => {
                    if (error) {
                        throw rej(error);
                    }

                    res(Object.values(JSON.parse(JSON.stringify(results)))[0]);

                });
                connection.end();
                logger.info(`Closing DB Connection`);
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async createNotifications(id_ticket: any, type_notifications: any) {

        var connection = dbConnection();
        connection.connect();


        const query = `EXEC nombre_procedimiento (${id_ticket}, ${type_notifications});`;


        let newResult: any = [];

        return await new Promise((res, rej) => {
            connection.query(query, async (error: any, results: any, fields: any) => {
                if (error) {
                    throw rej(error);
                }

                for (let r of results) {
                    newResult.push(Object.assign({}, r));
                }
                res(newResult);
            });
            connection.end();
            logger.info(`Closing DB Connection`);
        });
    }

    /***
     * QUERY DE LISTA DE PROBLEMAS
     */
    static async getListMotive() {
        try {
            var connection = dbConnection();
            connection.connect();

            const query = `CALL  usp_usrGetMotivosBajaCuenta()`;


            let newResult: any = [];

            return await new Promise((res, rej) => {
                connection.query(query, async (error: any, results: any, fields: any) => {
                    if (error) {
                        throw rej(error);
                    }

                    /*for (let r of results) {
                        newResult.push(Object.assign({}, r));
                    }*/
                    res(Object.values(JSON.parse(JSON.stringify(results)))[0]);
                });
                connection.end();
                logger.info(`Closing DB Connection`);
            });
        } catch (err) {
            console.log(err);
        }
    }

}

export default Query;