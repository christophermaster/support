/**
 * Autor: Christopher siverio
 * fecha: 15-09-2020
 */
class Mapeo {

    static mapeoTicket(tickets: any, create: any) {

        let ticket: any;
        let arrayTickets: any = [];
        let comments: any = [];

        if (create) {
            if(tickets.audit.events[0].attachments)
                comments = JSON.parse(JSON.stringify(tickets.audit.events[0].attachments));
            tickets = [tickets.ticket]
        } else {
            tickets = tickets.tickets;
        }

        for (let index = 0; index < tickets.length; index++) {

            ticket = {};
            ticket.url = tickets[index].url;
            ticket.id = tickets[index].id;
            ticket.via = tickets[index].via.channel;
            ticket.created_at = tickets[index].created_at;
            ticket.updated_at = tickets[index].updated_at;
            ticket.type = tickets[index].type;
            ticket.subject = tickets[index].subject;
            ticket.description = tickets[index].description;
            ticket.priority = tickets[index].priority;
            ticket.status = tickets[index].status;
            ticket.requester_id = tickets[index].requester_id;
            ticket.submitter_id = tickets[index].submitter_id;
            ticket.assignee_id = tickets[index].assignee_id;
            ticket.group_id = tickets[index].group_id;
            ticket.collaborator_ids = tickets[index].collaborator_ids;
            ticket.follower_ids = tickets[index].follower_ids;
            ticket.email_cc_ids = tickets[index].email_cc_ids;
            ticket.forum_topic_id = tickets[index].forum_topic_id;
            ticket.problem_id = tickets[index].problem_id;
            ticket.has_incidents = tickets[index].has_incidents;
            ticket.brand_id = tickets[index].brand_id;
            ticket.attachments = []
            if(comments.length != 0)
            for (let j = 0; j < comments.length; j++) {
                ticket.attachments.push({
                    url: comments[j].url,
                    id: comments[j].id,
                    file_name: comments[j].file_name,
                    content_url: comments[j].content_url,
                    mapped_content_url: comments[j].mapped_content_url,
                    content_type: comments[j].content_type,
                    size: comments[j].size,
                    width: comments[j].width,
                    height: comments[j].height

                });
            }

            arrayTickets.push(ticket);
        }

        return arrayTickets;
    }

    static mapeoComments(comments: any) {

        let comment: any;
        let arrayComments: any = [];
        comments = comments.comments;

        for (let index = 0; index < comments.length; index++) {

            comment = {};
            if (comments[index].via.channel === "api") {
                comment.from = "USER"
            } else {
                comment.from = "SQUINT"
            }
            comment.id = comments[index].id;
            comment.type = comments[index].type;
            comment.author_id = comments[index].author_id;
            comment.body = comments[index].body;
            comment.public = comments[index].public;

            comment.audit_id = comments[index].audit_id;
            comment.via = comments[index].via.channel;
            comment.to = comments[index].via.source.to;
            comment.created_at = comments[index].created_at;

            comment.attachments = []
            for (let j = 0; j < comments[index].attachments.length; j++) {
                comment.attachments.push({
                    url: comments[index].attachments[j].url,
                    id: comments[index].attachments[j].id,
                    file_name: comments[index].attachments[j].file_name,
                    content_url: comments[index].attachments[j].content_url,
                    mapped_content_url: comments[index].attachments[j].mapped_content_url,
                    content_type: comments[index].attachments[j].content_type,
                    size: comments[index].attachments[j].size,
                    width: comments[index].attachments[j].width,
                    height: comments[index].attachments[j].height
                });
            }

            comment.metadata = {};

            comment.metadata.client = comments[index].metadata.system.client;
            comment.metadata.ip_address = comments[index].metadata.system.ip_address;
            comment.metadata.location = comments[index].metadata.system.location;
            comment.metadata.latitude = comments[index].metadata.system.latitude;
            comment.metadata.longitude = comments[index].metadata.system.longitude;
            comment.metadata.custom = comments[index].metadata.system.custom;

            arrayComments.push(comment);
        }

        return arrayComments;
    }

    static motive(motives: any) {
        let auxMotive: any = [];
        for (let index = 0; index < motives.length; index++) {
            auxMotive.push({
                id: motives[index].Id,
                motive: motives[index].Motivo,
            });
        }

        return auxMotive;
    }
}

export default Mapeo;
