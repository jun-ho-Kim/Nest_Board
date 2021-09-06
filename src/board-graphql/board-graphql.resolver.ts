import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardGraphqlService } from './board-graphql.service';
import { BoardGraphql } from './entities/board-graphql.entity';
import { CreateBoardGraphqlInput } from './dto/create-board-graphql.input';
import { UpdateBoardGraphqlInput } from './dto/update-board-graphql.input';

@Resolver(() => BoardGraphql)
export class BoardGraphqlResolver {
  constructor(private readonly boardGraphqlService: BoardGraphqlService) {}

  @Mutation(() => BoardGraphql)
  createBoardGraphql(@Args('createBoardGraphqlInput') createBoardGraphqlInput: CreateBoardGraphqlInput) {
    return this.boardGraphqlService.create(createBoardGraphqlInput);
  }

  @Query(() => [BoardGraphql], { name: 'boardGraphql' })
  findAll() {
    return this.boardGraphqlService.findAll();
  }

  @Query(() => BoardGraphql, { name: 'boardGraphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardGraphqlService.findOne(id);
  }

  @Mutation(() => BoardGraphql)
  updateBoardGraphql(@Args('updateBoardGraphqlInput') updateBoardGraphqlInput: UpdateBoardGraphqlInput) {
    return this.boardGraphqlService.update(updateBoardGraphqlInput.id, updateBoardGraphqlInput);
  }

  @Mutation(() => BoardGraphql)
  removeBoardGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.boardGraphqlService.remove(id);
  }
}
