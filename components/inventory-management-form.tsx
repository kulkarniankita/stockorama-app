"use client";

export default function InventoryManagementForm() {
  const handleSubmit = async (formData: FormData) => {
    // "use server";
    // console.log({ formData });
    const productName = formData.get("product-name");
    const quantity = formData.get("quantity");
    console.log({ productName, quantity });

    const response = await fetch("/api/create-product", {
      method: "POST",
      body: JSON.stringify({ productName, quantity }),
    });
    const data = await response.json();
    console.log({ data });
  };
  return (
    <form className="space-y-4" action={handleSubmit}>
      <label htmlFor="product-name">Product name</label>
      <input
        type="text"
        placeholder="Product name"
        name="product-name"
        id="product-name"
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="Quantity"
        name="quantity"
        id="quantity"
      />
      <button type="submit" className="submit-button">
        Add
      </button>
    </form>
  );
}
