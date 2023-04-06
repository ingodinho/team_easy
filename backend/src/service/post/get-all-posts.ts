import {Post} from "../../entity/Post";
import {postRepository} from "../../repository/repositories";

export const getAllPosts = async () : Promise < Post[] > => {
    return await postRepository.find({
        relations: {
            user: true
        },
        select: {
            user: {
                userName: true,
                firstName: true,
                lastName: true,
                id: true,
            }
        }
    })
}
