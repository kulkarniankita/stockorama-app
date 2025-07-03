import InventoryManagementForm from "@/components/inventory-management-form";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="pt-6 space-y-12">
        <div className="space-y-2">
          <h2>Inventory Management</h2>
          <h3>Add a new product to the warehouse</h3>
        </div>
        <InventoryManagementForm />
      </div>
    </main>
  );
}
