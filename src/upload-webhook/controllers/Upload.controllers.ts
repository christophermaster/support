import UploadServices from '../services/Upload.services';


/**
 * Autor: Christopher siverio
 * fecha:26-08-2020
 */
class UploadControllers {

    static async uploadFile(req: any, res: any) {

        let upload: any = {};
        upload = await UploadServices.uploadFile(req.files);

        return res.status(200).json({ upload: upload });
    }

    static async updateTickets(req: any, res: any) {

        const body = req.body;

        try {
            const response = await UploadServices.updateTickets(body);
            if (response) {
                res.status(200).json({
                    mensaje: `Se actualizó Ticket #${body.id_ticket} relacionado a  "${body.subject}"`,
                });
            } else {
                res.status(403).json({
                    mensaje: `Hubo un error al actualizar el Ticket #${body.id_ticket} relacionado a  "${body.subject}"`,
                });
            }
        } catch (error) {
            return res.status(500).json({
                mensaje: `Ocurrio un error al recibir una notificación de ticket #${body.id_ticket}`,
                error
            })
        }
    }

    static async createComments(req: any, res: any) {

        const body = req.body;

        try {
            const response = await UploadServices.createComments(body);
            if (response)
                res.status(200).json({
                    mensaje: `Fue respondido su Ticket #${body.id_ticket} llamado ${body.subject}`,
                });
            else
                res.status(403).json({
                    mensaje: `Hubo un error al guardar su comentario del Ticket #${body.id_ticket} llamado ${body.subject}`,
                });
        } catch (error) {
            return res.status(500).json({
                mensaje: `Ocurrio un error al recibir una notificación de commentario del ticket #${body.id_ticket}`,
                error
            })
        }
    }

}

export default UploadControllers;