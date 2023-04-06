import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Post} from "./Post";

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

    @Column("varchar", {nullable: false, select: false})
    passwordHash: string;

    @Column("varchar", {nullable: false, select: false})
    passwordSalt: string;

    // FEATURE PROPERTIES

    @OneToMany(()=> Post, (post) => post.user)
    posts: Post[];

    constructor(username: string,
                firstName: string,
                lastName: string,
                email: string,
                passwordSalt: string,
                passwordHash: string) {
        this.userName = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordSalt = passwordSalt;
        this.passwordHash = passwordHash;
    }

}
