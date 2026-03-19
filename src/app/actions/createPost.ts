"use server";

import { createPost } from "@/lib/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createPostAction = async (formData: FormData) => {
    
    const title = formData.get("title");
    const content = formData.get("content")
    const image = formData.get("image")
    const user = (await cookies()).get("user");
    if (!user) {
        console.log("User not found");
        redirect("/login?error=User not found");
    }
    if (!title || !content) {
        console.log("All fields are required");
        redirect("/post/create?error=All fields are required");
    }
    await createPost(title as string, content as string, user.value as string, new Date(), new Date(), image as string);
    console.log("Post created");
    redirect("/dashboard");
};