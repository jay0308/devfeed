"use server";
import { deletePost, findPostById } from "@/lib/store";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAuth } from "@/lib/auth";

export const deletePostAction = async (postId: string) => {
    const user = await requireAuth();
    const post = await findPostById(postId);
    if (!post) {
        console.log("Post not found");
        return;
    }
    if (post.userId !== user.email) {
        console.log("User not authorized to delete this post");
        return;
    }
    await deletePost(postId);
    console.log("Post deleted");
    revalidatePath("/dashboard");
    revalidatePath("/");
    redirect("/dashboard");
}