import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column({ unique: true })
    cpf: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted user with id', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with id', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed user with cpf', this.cpf);
    }
}