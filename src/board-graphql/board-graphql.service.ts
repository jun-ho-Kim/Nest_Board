import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Board, BoardStatus } from 'src/board-rest/entities/board.entity';
import { CreateBoardGraphqlInput } from './dto/create-board-graphql.input';
import { UpdateBoardGraphqlInput } from './dto/update-board-graphql.input';

@Injectable()
export class BoardGraphqlService {
  private board = [];

  create({ title, description }: CreateBoardGraphqlInput) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.board.push(board);

    return board;
  }

  findAll() {
    return `This action returns all boardGraphql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardGraphql`;
  }

  update(id: number, updateBoardGraphqlInput: UpdateBoardGraphqlInput) {
    return `This action updates a #${id} boardGraphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardGraphql`;
  }
}
