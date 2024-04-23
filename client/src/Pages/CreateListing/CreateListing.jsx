import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { listingSchema } from "./Form/listingSchema";
import { FormInsertion } from "./Form/FormInsertion";

export function CreateListing() {
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(listingSchema),
  });

  const onSubmit = (data) => {
    // Handle the submission of form data
    console.log(data);
    setSubmitError("");
    // You might want to send this data to a server here
  };

  return (
    <div className="flex justify-center bg-white-to-green min-h-screen">
      <form
        className="p-5 flex flex-col gap-10 max-w-2xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInsertion
          label="Header"
          id="header"
          type="text"
          register={register}
          errors={errors}
        />
        <FormInsertion
          label="Price"
          id="price"
          type="number"
          register={register}
          errors={errors}
        />
        <FormInsertion
          label="Can Ship"
          id="canShip"
          type="checkbox"
          register={register}
          errors={errors}
        />
        <FormInsertion
          label="Description"
          id="description"
          type="textarea"
          register={register}
          errors={errors}
        />
        <FormInsertion
          label="Address"
          id="address"
          type="text"
          register={register}
          errors={errors}
        />
        <FormInsertion
          label="Image"
          id="image"
          type="text"
          register={register}
          errors={errors}
        />

        {submitError && <p>Error: {submitError}</p>}
        <div className="w-80">
          <button
            className="h-10 flex justify-center items-center"
            type="submit"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
}
