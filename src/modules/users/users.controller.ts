import { Body, Controller, Post, Get, Patch, Delete, Param, Query, NotFoundException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
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

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/find/:cpf')
    async findUser(@Param('cpf') cpf: string) {
        const user = await this.usersService.findCPF(cpf);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        return user;
    }

    @Get('/find')
    findAllUsers(@Query('name') name: string) {
        return this.usersService.findName(name);
    }

    @Delete('/delete/:cpf')
    removeUser(@Param('cpf') cpf: string) {
        return this.usersService.remove(cpf);
    }

    @Patch('/patch/:user_id')
    updateUser(@Param('user_id') user_id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(user_id, body);
    }
}