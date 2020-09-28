import { ObjectType, Field } from 'type-graphql';
import { IsNull } from '../common/Options';
import { ListTickets } from './ListTickets.models'
import { Comments } from './Comments.model'

/**
 * Autor: Christopher siverio
 * fecha: 27-09-2020
 */
@ObjectType()
export class ListComments {
    @Field(type  => ListTickets , IsNull) ticket!: ListTickets
    @Field(type  => [Comments] ,IsNull) comments!: [Comments]
}