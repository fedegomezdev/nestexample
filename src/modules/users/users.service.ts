import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUserInput } from './dto/getUser.input';
import { User } from './models/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async getOneUser(data: GetUserInput): Promise<User | undefined> {
    const { userId, email } = data;
    try {
      const user = await this.userRepository.findOne({ where: [{ id: userId }, { email: email }] });
      if (!user) throw new NotFoundException('No user found');
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async getUserById(userId: number): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOne(userId);
      return user;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
