import express, { Request, Response} from "express";
import {ICreatePostDTO} from "../models/post-dtos";
import {createPost} from "../service/post/create-post";
import {getAllPosts} from "../service/post/get-all-posts";

export const postController = express.Router();

postController.get("/", async (req : Request, res : Response) => {
    try {
        const allPosts = await getAllPosts();
        res.status(200).send(allPosts);
    } catch (e) {
        console.log("/post/", e);
        res.status(400).json({msg: "Something went wrong"});
    }
})

postController.post("/new", async (req : Request, res : Response) => {
    try {
        const newPost = req.body as ICreatePostDTO;
        const createdPost = await createPost(newPost);
        res.status(200).send(createdPost);
    } catch (e) {
        console.log("/post/new: ", e);
        res.status(400).json({msg: "Something went wrong"});
    }
})
