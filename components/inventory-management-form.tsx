"use client";

import { createProductAction } from "@/actions/product-actions";
import { State } from "@/types/product-types";
import { useActionState } from "react";
import { InputField } from "./form-fields/input-field";

export default function InventoryManagementForm() {
  const initialState: State = { message: "", errors: {}, type: "" };
  const [state, formAction, pending] = useActionState(
    createProductAction,
    initialState
  );
  return (
    <form className="space-y-4" action={formAction}>
      {state?.type === "error" && <p className="error">{state.message}</p>}
      <InputField
        label="Product name"
        name="product-name"
        error={state?.errors?.name}
      />
      <InputField
        label="Quantity"
        name="quantity"
        error={state?.errors?.quantity}
      />
      <button disabled={pending} type="submit" className="submit-button">
        {pending ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
