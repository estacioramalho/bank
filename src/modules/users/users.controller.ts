import { Body, Controller, Post, Get, Patch, Delete, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
constructor(private usersService: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        this.usersService.create(body.name, body.cpf, body.email, body.password);
    }

    @Get('/find/:cpf')
    findUser(@Param('cpf') cpf: string) {
        return this.usersService.findCPF(parseInt(cpf));
    }

    @Get('/find')
    findAllUsers(@Query('name') name: string) {
        return this.usersService.findName(name);
    }

    @Delete('/delete/:cpf')
    removeUser(@Param('cpf') cpf: number) {
        return this.usersService.remove(cpf);
    }

    @Patch('/patch/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(id, body);
    }
}