import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';

/**
 * Autor: Christopher siverio
 * fecha: 17-09-2020
 */
@ObjectType()
export class Motive {
    @Field(IsNull) id!: Number
    @Field(IsNull) motive!: String
}