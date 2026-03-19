"use server";

import { editPost, findPostById } from "@/lib/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const editPostAction = async (postId: string, formData: FormData) => {
    const user = (await cookies()).get("user");
    if (!user) {
        console.log("User not found");
        return;
    }
    const post = await findPostById(postId);
    if (!post) {
        console.log("Post not found");
        redirect(`/post/${postId}?error=Post not found`);
    }
    if (post.userId !== user.value) {
        console.log("User not authorized to edit this post");
        redirect(`/post/${postId}?error=User not authorized to edit this post`);
    }
    const title = formData.get("title");
    const content = formData.get("content");
    const image = formData.get("image");
    if (!title || !content) {
        console.log("All fields are required");
        redirect(`/post/${postId}?error=All fields are required`);
    }
    await editPost(postId, title as string, content as string, new Date(), image as string);
    console.log("Post edited");
    redirect(`/post/${postId}`);
}