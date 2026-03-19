// src/lib/store.ts
import { getDb, initDb, type User, type Post } from "./db";

export type { User, Post };

export async function createUser(email: string, password: string): Promise<User> {
  await initDb();
  const db = getDb();
  const user = { email, password };
  db.data.users.push(user);
  await db.write();
  return user;
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  await initDb();
  return getDb().data.users.find((u) => u.email === email);
}

// Similar for createPost, findPostById, findPostsByUserId - all async, use db.data.posts
export async function createPost(title: string, content: string, userId: string, createdAt: Date, updatedAt: Date, image: string, likes: number = 0): Promise<Post> {
  await initDb();
  const db = getDb();
  const post = { id: crypto.randomUUID(), title, content, createdAt, updatedAt, userId, image, likes };
  db.data.posts.push(post);
  await db.write();
  return post;
}

export async function editPost(id: string, title: string, content: string, updatedAt: Date, image: string, likes: number = 0): Promise<Post> {
  await initDb();
  const db = getDb();
  const post = db.data.posts.find((p) => p.id === id);
  if (!post) {
    throw new Error("Post not found");
  }
  post.title = title;
  post.content = content;
  post.updatedAt = updatedAt;
  post.likes = likes;
  post.image = image;
  await db.write();
  return post;
}

export async function findPostById(id: string): Promise<Post | undefined> {
  await initDb();
  return getDb().data.posts.find((p) => p.id === id);
}

export async function getAllPosts() {
    await initDb()
    return getDb().data.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getPostsByUserId(userId: string) {
    await initDb();
    return getDb().data.posts.filter((p) => p.userId === userId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function deletePost(id: string) {
  await initDb();
  const db = getDb();
  db.data.posts = db.data.posts.filter((p) => p.id !== id);
  await db.write();
}