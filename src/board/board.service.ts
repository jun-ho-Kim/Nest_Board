import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Board } from 'src/board/entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { BoardStatus } from './dto/boradStatus.enum';

@Injectable()
export class BoardService {
  private board = [];

  create({ title, description }: CreateBoardInput) {
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

  update(id: number, updateBoardGraphqlInput: UpdateBoardInput) {
    return `This action updates a #${id} boardGraphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardGraphql`;
  }
}
