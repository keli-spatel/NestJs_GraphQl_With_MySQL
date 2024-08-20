import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity/user.entity';
import { UsersResolver } from './users.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UsersResolver],
  controllers: []
})
export class UsersModule {}
