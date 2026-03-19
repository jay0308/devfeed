"use server";
import { createUser, findUserByEmail } from "@/lib/store";
import { emailRegex } from "../utils/constants";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const register = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!email || !password || !confirmPassword) {
    console.log("All fields are required");
    redirect("/register?error=All fields are required");
  }

  if (password.length < 8) {
    console.log("Password must be at least 8 characters long");
    redirect("/register?error=Password must be at least 8 characters long");
  }

  if (!emailRegex.test(email)) {    
    console.log("Invalid email address");
    redirect("/register?error=Invalid email address");
  }

  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    redirect("/register?error=Passwords do not match");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  if (!hashedPassword) {
    console.log("Failed to hash password");
    redirect("/register?error=Failed to hash password");
  }

  // Optional: reject duplicate emails
  if (await findUserByEmail(email)) {
    console.log("Email already registered");
    redirect("/register?error=Email already registered");
  }

  await createUser(email, hashedPassword);
  console.log("User created");
  redirect("/login");
};