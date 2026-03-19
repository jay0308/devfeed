"use client";

import { useOptimistic, useTransition } from "react";
import { useState } from "react";
import { likeAction } from "@/app/actions/likeAction";
import { Post } from "@/lib/store";
import { FaHeart } from "react-icons/fa";

export const LikeButton = ({ post }: { post: Post }) => {
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likeCount,
    (current, increment: number) => current + increment
  );

  const handleLike = () => {
    startTransition(async () => {
      addOptimisticLike(1);
      const result = await likeAction(post.id);
      if (result) setLikeCount(result.likes);
    });
  };

  return (
    <button onClick={handleLike} disabled={isPending}>
      <FaHeart /> {optimisticLikes} likes
    </button>
  );
};