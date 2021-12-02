import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column()
    isActive: boolean;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({default: "Admin"})
    createdBy: string;

    @CreateDateColumn()
    createDate: Date;

    

}