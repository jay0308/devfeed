import { Posts } from "@/components/posts";
import { getAllPosts } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <div className="posts-container py-16">
      <div className="page-container">
        <div className="posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
