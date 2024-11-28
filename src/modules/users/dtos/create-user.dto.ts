import { IsEmail, IsString, IsNumber, Length } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    @Length(11, 11)
    cpf: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}