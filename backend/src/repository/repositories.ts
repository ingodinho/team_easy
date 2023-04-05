import {AppDataSource} from "../data-source";
import {User} from "../entity/User";
import {Repository} from "typeorm";

export const userRepository : Repository<User> = AppDataSource.getRepository(User);
