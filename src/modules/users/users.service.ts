import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor (@InjectRepository(User) private repo: Repository<User>) {}

    create(name: string, cpf: string, email: string, password: string) {
        const user = this.repo.create ({ name, cpf, email, password });

        return this.repo.save(user);
    }

    findCPF(cpf: string) {
        return this.repo.findOneBy({ cpf });
    }

    findID(user_id: string) {
        return this.repo.findOneBy({ user_id });
    }

    findName(name: string) {
        return this.repo.find({ where: { name } });
    }

    async update(id: string, attrs: Partial<User>) {
        const user = await this.findID(id);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(cpf: string) {
        const user = await this.findCPF(cpf);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        return this.repo.remove(user);
    }
}
