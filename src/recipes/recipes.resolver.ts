import { Args, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver((of) => String)
export class RecipesResolver {
  @Query((returns) => String)
  async recipe(@Args('id') id: string): Promise<string> {
    return '';
  }
}
