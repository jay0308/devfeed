// src/lib/auth.ts
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { findUserByEmail } from "@/lib/store";

export async function requireAuth() {
  const userCookie = (await cookies()).get("user");
  if (!userCookie?.value) {
    redirect("/login");
  }

  const user = await findUserByEmail(userCookie.value);
  if (!user) {
    redirect("/login?error=Session expired");
  }

  return user;
}

export async function getOptionalAuth() {
  const userCookie = (await cookies()).get("user");
  if (!userCookie?.value) return null;
  const user = await findUserByEmail(userCookie.value);
  return user ?? null;
}