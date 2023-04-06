import {AppDataSource} from "./data-source";
import {User} from "../entity/User";
import {Repository} from "typeorm";
import {Post} from "../entity/Post";

export const userRepository : Repository<User> = AppDataSource.getRepository(User);
export const postRepository : Repository<Post> = AppDataSource.getRepository(Post);
