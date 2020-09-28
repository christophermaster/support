import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import getHeaders from './helpers/header/Header.helper'
import { ZendeskResolver } from './resolvers/Zendesk.resolvers'
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload'

require('dotenv').config({ path: process.cwd() + '\\src\\env\\config\\dev.env' })

/**
 * Autor: Christopher siverio
 * fecha: 15-09-2020
 */
//Se encarga de levantar el servico GrapQl
export async function startServer(port: any = 4000) {

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        ZendeskResolver
      ],

    }),
    context: ({ req, res }) => getHeaders(req),

  });

  const { url } = await server.listen(port)

  return server;

}
