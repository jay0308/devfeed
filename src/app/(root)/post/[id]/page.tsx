import { findPostById } from "@/lib/store";
import { formatDate } from "@/app/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOptionalAuth } from "@/lib/auth";
import { PostActions } from "@/components/posts/PostActions";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getOptionalAuth();
  const { id } = await params;
  const post = await findPostById(id);
  if (!post) notFound();

  const canEdit = user?.email === post.userId;

  return (
    <div className="post-page-container py-16 pt-16">
      <div className="page-container">
        <Link href="/" className="text-blue-600 hover:underline">← Back</Link>
        {canEdit && <PostActions postId={id} post={post} />}
        <article className="mt-8 max-w-2xl">
          <div className="feature-image h-48 bg-gray-200 my-16">
            {post.image && <img className="w-full h-full object-cover" src={post.image} alt={post.title} />}
          </div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-4 text-gray-500">{formatDate(post.createdAt, "dd/mm/yyyy")} · {post.userId}</p>
          <p className="mt-6 whitespace-pre-wrap">{post.content}</p>
        </article>
      </div>
    </div>
  );
}