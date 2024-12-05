import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import  { Exclude } from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    name: string;
    
    @Column({ unique: true })
    cpf: string;

    @Column({ unique: true })
    email: string;

    @Column()
    @Exclude()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted user with id', this.user_id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with id', this.user_id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed user with cpf', this.cpf);
    }
}