import { Posts } from "@/components/posts";
import { getPostsByUserId } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await requireAuth();
  const posts = await getPostsByUserId(user.email);
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900">Welcome back, {user.email}</h2>
      <p className="mt-2 text-gray-500">Here&apos;s what&apos;s happening with your feed today.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}