import { formatDate } from "@/app/utils";
import { editPost, Post } from "@/lib/store";
import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { LikeButton } from "./LikeButton";

export const Posts = ({ post }: { post: Post }) => {

    return (
        <div className="post-container border border-gray-300 rounded-md shadow-md">
            <div className="feature-image h-48 bg-gray-200">
                {post.image && <img className="w-full h-full object-cover" src={post.image} alt={post.title} />}
            </div>
            <div className="post-header my-0 p-4 pb-0">
                <h2 className="text-xl font-bold">{post.title}</h2>
            </div>
            <div className="post-body p-4 min-h-[4.5rem]">
                <p className="line-clamp-3 text-ellipsis overflow-hidden">{post.content}</p>
            </div>
            <div className="read-more flex items-center justify-start pl-4 pr-4">
                <Link href={`/post/${post.id}`} className="flex items-center justify-start gap-2">Read More <FaArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="post-footer p-4 border-t border-gray-300 mt-2">
                <LikeButton post={post} />
                <div className="post-footer-author flex items-center justify-between">
                    <span><b>posted by:</b> {post.userId}</span> <span><b>on:</b> {formatDate(post.createdAt, "dd/mm/yyyy")}</span>
                </div>
            </div>
        </div>
    );
};