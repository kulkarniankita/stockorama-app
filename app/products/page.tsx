import { LikeButton } from "@/components/like-button";
import { prisma } from "@/lib/db";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default async function ProductsPage() {
  const inventories = (await prisma.product.findMany()).sort(
    (a, b) => b.likes - a.likes
  );

  return (
    <main className="wrapper">
      <Link href="/">← Back to Home</Link>
      <div className="space-y-2">
        <h2>Items in the Warehouse</h2>
        <h3>Click on the like button to like an item</h3>
      </div>

      <section className="flex flex-col gap-4">
        {inventories.map(({ name, quantity, likes, id }) => (
          <div className="card" key={id}>
            <div>
              <p className="font-medium capitalize">{name}</p>
              <span>Qty: {quantity}</span>
            </div>
            <div className="flex items-center gap-2">
              <LikeButton likes={likes} id={id} />
              <div className="delete-button">
                <Trash2Icon />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
