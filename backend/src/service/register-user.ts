import {User} from "../entity/User";
import {userRepository} from "../repository/repositories";
import {UserToRegister} from "../models/user-dtos";

export const registerUser = async (user: UserToRegister) : Promise<User> => {
    const foundUser = await userRepository.findOneBy({email: user.email});

    if(foundUser) {
        throw new Error("E-Mail already taken");
    }

    const newUser = new User(user.userName, user.firstName, user.lastName, user.email, user.password);

    return await userRepository.save(newUser);
}
