import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async create(user:Partial<UserEntity>):Promise<UserEntity>{
        return this.userRepository.save(user)
    }

    findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
      }
}
