/**
 * Autor: Christopher siverio
 * fecha: 28-07-2020
 */
function getHeaders(req: any) {
    return {
        token_user: req.headers.token_user,
        id_problem: req.headers.id_problem,
        id_ticket: req.headers.id_ticket,
        subject: req.headers.subject,
        description: req.headers.description,
        token_file: req.headers.token_file,
        email: req.headers.email,
        status: req.headers.status,

        upload_s3: req.headers.upload_s3 === "true" ? true:false
    };
}

export default getHeaders
