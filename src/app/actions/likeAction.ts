"use server";
import { editPost, findPostById  } from "@/lib/store";
import { revalidatePath } from "next/cache";

export const likeAction = async (postId: string) => {
    const post = await findPostById(postId);
    if (!post) {
        console.log("Post not found");
        return;
    }
    const newLikes = post.likes + 1;
    await editPost(postId, post.title, post.content, post.updatedAt, post.image, newLikes);
    revalidatePath("/dashboard");
    revalidatePath("/");
    return {... post, likes: newLikes};
}