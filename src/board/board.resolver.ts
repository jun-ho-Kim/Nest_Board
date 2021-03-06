import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) { }

  @Query(() => [Board])
  findAll() {
    return this.boardService.findAll();
  }

  @Query(() => Board)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardService.findOne(id);
  }

  @Mutation(() => Board)
  createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return this.boardService.create(createBoardInput);
  }


  @Mutation(() => Board)
  updateBoard(@Args('updateBoardInput') updateBoardInput: UpdateBoardInput) {
    return this.boardService.update(updateBoardInput.id, updateBoardInput);
  }

  @Mutation(() => Board)
  removeBoard(@Args('id', { type: () => Int }) id: number) {
    return this.boardService.remove(id);
  }
}
