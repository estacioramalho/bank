import { IsEmail, isString, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    cpf: number;

    @IsEmail()
    @IsOptional()
    email : string;

    @IsString()
    @IsOptional()
    password : string;
}