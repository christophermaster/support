import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';

/**
 * Autor: Christopher siverio
 * fecha: 17-09-2020
 */
@ObjectType()
export class Metadata {
    @Field(IsNull) client!: String
    @Field(IsNull) ip_address!: String
    @Field(IsNull) location!: String
    @Field(IsNull) latitude!: String
    @Field(IsNull) longitude!: String
    @Field(IsNull) custom!: String
}