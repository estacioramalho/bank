import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    account_id: string;

    @Column({ unique: true })
    accountNumber: string;

    @Column({ precision: 10, scale: 2 })
    balance: number;
    
}