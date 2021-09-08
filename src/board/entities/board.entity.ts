import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { BoardStatus } from 'src/board/dto/boradStatus.enum';

registerEnumType(BoardStatus, { name: 'BoardStatus' })

@ObjectType()
export class Board {
  @Field(() => String)
  id: string

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => BoardStatus)
  status: BoardStatus;
}
