import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) { }

  getMockUser() {
    return {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      createdAt: new Date().toISOString(),
    };
  }

  getAllUsers() {
    return this.userRepo.find();
  }
}
