import { getPostsByUserId } from "@/lib/store";
import { requireAuth } from "@/lib/auth";

export default async function StatsPage() {
    const user = await requireAuth();
    const posts = await getPostsByUserId(user.email);
    const items = [
      { label: "Total Posts", value: posts.length, color: "text-blue-600" },
      { label: "Likes", value: posts.reduce((acc, post) => acc + post.likes, 0), color: "text-emerald-600" },
    ];
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Stats</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
              <span className="text-sm text-gray-600">{item.label}</span>
              <span className={`font-bold ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }