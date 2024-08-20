import { Args, Mutation, Resolver ,Query} from '@nestjs/graphql';
import { UserEntity } from './user.entity/user.entity';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create.user.input';

@Resolver(of => UserEntity)
export class UsersResolver {
    constructor(
        private readonly usersService:UsersService
    ){}
   
    @Query(returns => [UserEntity])
     users() {
       return this.usersService.findAll();
     }
     
    @Mutation(returns => UserEntity)
    createUser(@Args('createUserDto') createUserDTO:CreateUserDTO){
        return this.usersService.create(createUserDTO)
    }
}
