import React from "react";
import { Form } from "react-hook-form";
import { FormError } from "./FormError";

export function FormInsertion({ label, id, type, register, errors }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        className="py-1 px-2 border rounded-lg "
        id={id}
        type={type}
        {...register(id, { valueAsNumber: type === "number" })}
      />
      <FormError errors={errors} id={id} />
    </div>
  );
}
