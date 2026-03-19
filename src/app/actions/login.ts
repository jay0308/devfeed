"use server";
import { findUserByEmail } from "@/lib/store";
import { emailRegex } from "../utils/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        console.log("All fields are required");
        redirect("/login?error=All fields are required");
    }

    if (!emailRegex.test(email)) {
        console.log("Invalid email address");
        redirect("/login?error=Invalid email address");
    }

    const user = await findUserByEmail(email);
    if (!user) {
        console.log("User not found");
        redirect("/login?error=User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user?.password || '');
    if (!isPasswordValid) {
        console.log("Invalid password");
        redirect("/login?error=Invalid password");
    }

    (await cookies()).set("user", user?.email);
    console.log("User logged in");
    redirect("/");
}