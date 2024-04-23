import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { listingSchema } from "./Form/listingSchema";
import { FormField } from "./Form/FormField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import productService from "../../services/productService";

export function CreateListing() {
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(listingSchema),
  });

  const { user } = useKindeAuth();
  console.log(user);
  const userId = user?.id;
  const userName = user?.given_name;

  const onSubmit = async (data) => {
    console.log("Data submitted:", data);
    if (!userId || !userName) {
      setSubmitError("You have to be logged in");
      return;
    }

    // Start by destructuring the image from the data and gather the rest separately
    const { image, ...rest } = data;

    // Initialize fullData with the data that doesn't need conversion
    let fullData = { ...rest, sellerID: userId, sellerName: userName };

    if (image && image.length > 0) {
      const file = image[0]; // Assuming it's the first file
      try {
        // Convert the file to a base64 string
        const base64 = await toBase64(file);
        // Now, add the base64 string to fullData
        fullData.image = base64;
      } catch (error) {
        console.error("Error converting file to base64", error);
        setSubmitError("Error processing the image");
        return; // Stop the submission if there's an error with the image
      }
    }

    console.log("Full data:", fullData);

    productService
      .createListing(fullData)
      .then((response) => {
        console.log("Listing created:", response);
        // Redirect or update UI accordingly
      })
      .catch((error) => {
        setSubmitError(error.message);
        console.error("Error creating listing:", error);
      });
  };

  // Helper function to convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className="flex justify-center bg-white-to-green min-h-screen">
      <form
        className="p-5 flex flex-col gap-10 max-w-2xl "
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          label="Header"
          id="header"
          type="text"
          register={register}
          errors={errors}
        />
        <FormField
          label="Price"
          id="price"
          type="number"
          register={register}
          errors={errors}
        />
        <FormField
          label="Can Ship"
          id="canShip"
          type="checkbox"
          register={register}
          errors={errors}
        />
        <FormField
          label="Category"
          id="category"
          type="select"
          register={register}
          errors={errors}
          options={["Clothing", "Electronics", "Furniture", "Other"]}
        />
        <FormField
          label="Color"
          id="color"
          type="text"
          register={register}
          errors={errors}
        />
        <FormField
          label="Description"
          id="description"
          type="textarea"
          register={register}
          errors={errors}
        />
        <FormField
          label="Address"
          id="address"
          type="text"
          register={register}
          errors={errors}
        />
        <FormField
          label="Image"
          id="image"
          type="file"
          register={register}
          errors={errors}
        />
        {/* 
        <input type="hidden" name="sellerID" value={userId} ref={register} />
        <input
          type="hidden"
          name="sellerName"
          value={userName}
          ref={register}
        /> */}

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
