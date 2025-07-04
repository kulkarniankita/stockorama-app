"use client";
import { deleteProductAction } from "@/actions/product-actions";
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { useTransition } from "react";

export const DeleteButton = ({ id }: { id: string }) => {
  const [pending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        await deleteProductAction({ id });
      } catch (err) {
        console.error("Error: Failed to delete product", err);
      }
    });
  };
  return (
    <button className="delete-button" onClick={handleDelete}>
      {pending ? (
        <Loader2Icon className="animate-spin" size={20} />
      ) : (
        <Trash2Icon size={20} />
      )}
    </button>
  );
};
