import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board, BoardStatus } from './entities/board.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BoardService {
  private boards = [];

  getAllBoard(): Board[] {
    return this.boards;
  }

  getBoard(id: string) {
    const board: Board = this.boards.find((board) => board.id === id);

    return board;
  }
  create({ title, description }: CreateBoardDto) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);

    return board;
  }

  update(id: string, { title, description }: UpdateBoardDto) {
    const board: Board = this.getBoard(id);
    if (title) {
      board.title = title;
    } else if (description) {
      board.description = description;
    }

    return board;
  }

  delete(id: string): any {
    return this.boards.filter((board) => board.id !== id);
  }
}
