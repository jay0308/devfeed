import { Posts } from "@/components/posts";
import { getPostsByUserId } from "@/lib/store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = (await cookies()).get("user");
  if (!user) {
    redirect("/login");
  }
  const posts = await getPostsByUserId(user.value);
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900">Welcome back, {user.value}</h2>
      <p className="mt-2 text-gray-500">Here&apos;s what&apos;s happening with your feed today.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}