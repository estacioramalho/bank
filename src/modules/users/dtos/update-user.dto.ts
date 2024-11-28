import { IsEmail, isString, IsOptional, IsString, IsNumber, Length, Matches } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    @Length(11, 11, { message: 'CPF must have exactly 11 numbers' })
    @Matches(/^\d+$/, { message: 'CPF must contain only numbers' })
    cpf: string;

    @IsEmail()
    @IsOptional()
    email : string;

    @IsString()
    @IsOptional()
    password : string;
}