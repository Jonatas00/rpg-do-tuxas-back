import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllUsers(@Res() response: Response) {
    return response.status(200).json(this.usersService.findAllUsers());
  }

  @Post()
  async createUser(@Res() response: Response, @Body() userDTO: UsersDto) {
    const userCreated = await this.usersService.createUser(userDTO);
    return response.status(201).json(userCreated);
  }
}
