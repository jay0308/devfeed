"use server";
import { deletePost, findPostById } from "@/lib/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const deletePostAction = async (postId: string) => {
    const user = (await cookies()).get("user");
    if (!user) {
        console.log("User not found");
        return;
    }
    const post = await findPostById(postId);
    if (!post) {
        console.log("Post not found");
        return;
    }
    if (post.userId !== user.value) {
        console.log("User not authorized to delete this post");
        return;
    }
    await deletePost(postId);
    console.log("Post deleted");
    redirect("/dashboard");
}