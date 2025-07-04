"use client";

import { incrementLikesAction } from "@/actions/product-actions";
import { useOptimistic, useTransition } from "react";

export const LikeButton = ({ likes, id }: { likes: number; id: string }) => {
  const [isPending, startTransition] = useTransition();
  const [optimisticState, setOptimistic] = useOptimistic(
    {
      likes,
      sending: false,
    },
    (currentState, newLikeCount: number) => {
      return {
        ...currentState,
        likes: newLikeCount,
        sending: true,
      };
    }
  );
  const handleLike = async () => {
    startTransition(async () => {
      setOptimistic(optimisticState.likes + 1);
      await incrementLikesAction({ id });
    });
  };

  return (
    <div className="like-button">
      <button
        className="text-base lg:text-xl hover:cursor-pointer p-1"
        onClick={handleLike}
      >
        💖
      </button>
      {optimisticState.likes}
    </div>
  );
};
