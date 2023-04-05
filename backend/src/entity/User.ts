import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 100, nullable: false})
    userName: string;

    @Column("varchar", {length: 100, nullable: false})
    firstName: string;

    @Column("varchar", {length: 100, nullable: false})
    lastName: string;

    @Column("varchar", {length: 100, nullable: false})
    email: string;

    @Column("varchar", {length: 100, nullable: false})
    password: string;

    constructor(username: string, firstName: string, lastName: string, email: string, password: string) {
        this.userName = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
