import {ICreatePostDTO} from "../../models/post-dtos";
import {postRepository, userRepository} from "../../repository/repositories";
import {Post} from "../../entity/Post";

export const createPost = async (post : ICreatePostDTO) => {
    const user = await userRepository.findOneBy({id: post.userId});
    if(!user) {
        throw new Error("No user with this id found");
    }

    const newPost = new Post(post.createdAt, user, post.text);
    return await postRepository.insert(newPost);
}
