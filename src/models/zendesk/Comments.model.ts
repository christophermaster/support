import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';
import { Attachments } from '../zendesk/Attachments.model'
import { Metadata } from '../zendesk/Metadata.model'

/**
 * Autor: Christopher siverio
 * fecha: 17-09-2020
 */
@ObjectType()
export class To {
    @Field(IsNull) name!: String
    @Field(IsNull) address!: String
}

@ObjectType()
export class Comments {

    @Field(IsNull) from!: String
    @Field(IsNull) id!: String
    @Field(IsNull) type!: String
    @Field(IsNull) author_id!: String
    @Field(IsNull) body!: String
    @Field(IsNull) public!: String
    @Field(IsNull) audit_id!: String
    @Field(IsNull) via!: String
    @Field(type => To, IsNull) to!: To
    @Field(IsNull) created_at!: String
    @Field(type => [Attachments], IsNull) attachments!: [Attachments]
    @Field(type => Metadata, IsNull) metadata!: Metadata

}