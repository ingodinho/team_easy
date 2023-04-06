import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp")
    createdAt: Date;

    @ManyToOne(()=> User, (user) => user.posts)
    user: User;

    @Column("text")
    text: string;

    constructor(createdAt : Date, user : User, text : string) {
        this.createdAt = createdAt;
        this.user = user;
        this.text = text;
    }
}
