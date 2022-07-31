import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(this.userRepository.create(createUserDto));
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      id: id,
    });
    return user;
  }
  async findOneByUsername(username: string) {
    const user = await this.userRepository.findOne({
      username: username,
    });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.save(
      this.userRepository.create({
        id,
        ...updateUserDto,
      }),
    );
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
