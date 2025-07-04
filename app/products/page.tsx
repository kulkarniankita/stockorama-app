import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="wrapper">
      <Link href="/">← Back to Home</Link>
      <div className="space-y-2">
        <h2>Items in the Warehouse</h2>
        <h3>Click on the like button to like an item</h3>
      </div>

      <section>
        <div className="card">
          <div>
            <p className="font-medium capitalize">Product Name</p>
            <span>Qty: 12</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="like-button">💖 40</div>
            <div className="delete-button">
              <Trash2Icon />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
