import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserDTO{

    @Field()
    name:string

    @Field()
    email:string
}