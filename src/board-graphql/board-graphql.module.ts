import { Module } from '@nestjs/common';
import { BoardGraphqlService } from './board-graphql.service';
import { BoardGraphqlResolver } from './board-graphql.resolver';

@Module({
  providers: [BoardGraphqlResolver, BoardGraphqlService]
})
export class BoardGraphqlModule {}
