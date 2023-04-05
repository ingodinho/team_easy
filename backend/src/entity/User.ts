import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {createHash, createRandomHash} from "../utils/encryption/hash";

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

    @Column("varchar", {nullable: false})
    passwordHash: string;

    @Column("varchar", {nullable: false})
    passwordSalt: string;

    constructor(username: string, firstName: string, lastName: string, email: string, password: string) {
        this.userName = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordSalt = createRandomHash();
        this.passwordHash = createHash(password + this.passwordSalt);
    }

}
