import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDomain } from './user.domain';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAllUsers(): Promise<Users[]> {
    const users = await this.usersRepository.find();

    if (users.length === 0) throw new HttpException('Users not found!', 404);

    return users;
  }

  async createUser(user: UserDomain): Promise<UserDomain> {
    // Check if a user with the same email already exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new HttpException('email already registered', 400);
    }

    const createdUser = await this.usersRepository.save(user);
    return createdUser;
  }
}
