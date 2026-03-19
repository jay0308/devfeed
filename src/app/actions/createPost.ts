"use server";

import { createPost } from "@/lib/store";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAuth } from "@/lib/auth";

export const createPostAction = async (formData: FormData) => {
    const user = await requireAuth();
    const title = formData.get("title");
    const content = formData.get("content")
    const image = formData.get("image")
    if (!title || !content) {
        console.log("All fields are required");
        redirect("/post/create?error=All fields are required");
    }
    await createPost(title as string, content as string, user.email, new Date(), new Date(), image as string);
    console.log("Post created");
    revalidatePath("/dashboard");
    revalidatePath("/")
    redirect("/dashboard");
};