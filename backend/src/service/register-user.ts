import {User} from "../entity/User";
import {userRepository} from "../repository/repositories";

export const registerUser = async (user: User) : Promise<User> => {
    const foundUser = await userRepository.findOneBy({email: user.email});
    if(foundUser) {
        throw new Error("E-Mail already taken");
    }
    return await userRepository.save(user);
}
