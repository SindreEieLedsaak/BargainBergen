import React from "react";

export function FormError({ errors, id }) {
  return (
    <div className="text-[#ff0033]">
      {errors[id] && <p>{errors[id].message}</p>}
    </div>
  );
}
