import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../users/models/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}
