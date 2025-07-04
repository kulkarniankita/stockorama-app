"use client";

import { incrementLikesAction } from "@/actions/product-actions";
import { useState } from "react";

export const LikeButton = ({
  likes: parentLikes,
  id,
}: {
  likes: number;
  id: string;
}) => {
  const [likes, setLikes] = useState(parentLikes);

  const handleLike = async () => {
    setLikes(likes + 1);
    //call server action
    await incrementLikesAction({ id });
  };

  return (
    <div className="like-button">
      <button
        className="text-base lg:text-xl hover:cursor-pointer p-1"
        onClick={handleLike}
      >
        💖
      </button>
      {likes}
    </div>
  );
};
