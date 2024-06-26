import React from "react";
import { Form } from "react-hook-form";
import { FormError } from "./FormError";

export function FormField({ label, id, type, register, errors, options }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select {...register(id)}>
          {options.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input type="file" accept="image/jpeg" {...register("image")} />
      ) : (
        <input
          className="py-1 px-2 border rounded-lg "
          id={id}
          type={type}
          {...register(id, { valueAsNumber: type === "number" })}
        />
      )}
      <FormError errors={errors} id={id} />
    </div>
  );
}
