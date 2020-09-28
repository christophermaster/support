import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';
import { Attachments } from '../zendesk/Attachments.model'

/**
 * Autor: Christopher siverio
 * fecha: 17-09-2020
 */
@ObjectType()
export class Ticket {

    @Field(IsNull) token_user!: String
    @Field(IsNull) url!: String
    @Field(IsNull) id!: String
    @Field(IsNull) via!: String
    @Field(IsNull) created_at!: String
    @Field(IsNull) updated_at!: String
    @Field(IsNull) type!: String
    @Field(IsNull) subject!: String
    @Field(IsNull) description!: String
    @Field(IsNull) priority!: String
    @Field(IsNull) status!: String
    @Field(IsNull) requester_id!: String
    @Field(IsNull) submitter_id!: String
    @Field(IsNull) assignee_id!: String
    @Field(IsNull) group_id!: String
    @Field(IsNull) collaborator_ids!: String
    @Field(IsNull) follower_ids!: String
    @Field(IsNull) email_cc_ids!: String
    @Field(IsNull) forum_topic_id!: String
    @Field(IsNull) problem_id!: String
    @Field(IsNull) has_incidents!: String
    @Field(IsNull) brand_id!: String
    @Field(type => [Attachments], IsNull) Attachments!: [Attachments]
}