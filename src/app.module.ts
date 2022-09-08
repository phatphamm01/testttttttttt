import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphqlService } from './configs/graphql.config';
import { MongooseConfigService } from './configs/mongoose.config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphqlService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    RecipesModule,
  ],
})
export class AppModule {}
