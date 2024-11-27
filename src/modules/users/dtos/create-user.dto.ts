import { IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    cpf: number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}