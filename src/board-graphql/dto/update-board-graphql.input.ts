import { CreateBoardGraphqlInput } from './create-board-graphql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardGraphqlInput extends PartialType(CreateBoardGraphqlInput) {
  @Field(() => Int)
  id: number;
}
