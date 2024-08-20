import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class UserEntity {
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    name:string

    @Field()
    @Column()
    email:string
}
