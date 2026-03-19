import { getAllPosts } from "@/lib/store";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TrendingPage() {
    const user = (await cookies()).get("user");
    if (!user) {
        redirect("/login");
    }
    const posts = await getAllPosts();
    //get two most liked posts
    const mostLikedPosts = posts.sort((a, b) => b.likes - a.likes).slice(0, 2);
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Trending</h2>
        <div className="flex flex-wrap gap-2">
          {mostLikedPosts.map((post) => (
            <span
              key={post.id}
              className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
                <Link href={`/post/${post.id}`}>{post.title}</Link>
            </span>
          ))}
        </div>
      </div>
    );
  }