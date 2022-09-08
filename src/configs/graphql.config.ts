import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  async createGqlOptions(): Promise<ApolloDriverConfig> {
    return {
      cors: {
        credentials: true,
        origin: ['*'],
      },
      context: ({ req, res }) => ({ req, res }),
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscriptions: { 'graphql-ws': true },
      sortSchema: true,
      csrfPrevention: true,
      cache: 'bounded',
    };
  }
}
