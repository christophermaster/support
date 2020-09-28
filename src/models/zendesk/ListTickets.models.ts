import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';

/**
 * Autor: Christopher siverio
 * fecha: 25-09-2020
 */
@ObjectType()
export class ListTickets {

    @Field(IsNull) IdUser!: String
    @Field(IsNull) FirsName!: String
    @Field(IsNull) MiddleName!: String
    @Field(IsNull) SecondName!: String
    @Field(IsNull) LastName!: String
    @Field(IsNull) IdTicket!: String
    @Field(IsNull) IdProblem!: String
    @Field(IsNull) Motivo!: String
    @Field(IsNull) Description!: String
    @Field(IsNull) CreateDate!: String
    @Field(IsNull) UpdateDate!: String
    @Field(IsNull) Status!: String
    @Field(IsNull) Email!: String

}