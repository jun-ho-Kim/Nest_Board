import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardGraphqlInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  title: string;

  description: string;
}
