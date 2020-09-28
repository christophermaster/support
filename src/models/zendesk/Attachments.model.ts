import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';

/**
 * Autor: Christopher siverio
 * fecha: 17-09-2020
 */
@ObjectType()
export class Attachments {

    @Field(IsNull) url!: String
    @Field(IsNull) id!: String
    @Field(IsNull) file_name!: String
    @Field(IsNull) content_url!: String
    @Field(IsNull) mapped_content_url!: String
    @Field(IsNull) content_type!: String
    @Field(IsNull) size!: String
    @Field(IsNull) width!: String
    @Field(IsNull) height!: String

}