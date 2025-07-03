export default function InventoryManagementForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    console.log({ formData });
  };
  return (
    <form className="space-y-4" action={handleSubmit}>
      <label htmlFor="product-name">Product name</label>
      <input type="text" placeholder="Product name" />
      <label htmlFor="quantity">Quantity</label>
      <input type="number" placeholder="Quantity" />
      <button type="submit" className="submit-button">
        Add
      </button>
    </form>
  );
}
