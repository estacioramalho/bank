import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ unique: true })
    accountNumber: string;

    @Column({ precision: 10, scale: 2 })
    balance: number;
    
}