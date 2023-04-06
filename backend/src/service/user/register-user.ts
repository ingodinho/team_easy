import {User} from "../../entity/User";
import {userRepository} from "../../repository/repositories";
import {IUserToRegister} from "../../models/user-dtos";
import {createHash, createRandomHash} from "../../utils/encryption/hash";

export const registerUser = async (user: IUserToRegister) : Promise<User> => {
    const foundUser = await userRepository.findOneBy({email: user.email});

    if(foundUser) {
        throw new Error("E-Mail already taken");
    }

    const passwordSalt = createRandomHash();
    const passwordHash = createHash(user.password + passwordSalt);

    const newUser = new User(user.userName, user.firstName, user.lastName, user.email, passwordSalt, passwordHash);

    return await userRepository.save(newUser);
}
