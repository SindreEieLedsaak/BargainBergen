import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { listingSchema } from "./Form/listingSchema";
import { FormField } from "./Form/FormField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import productService from "../../services/productService";
import { useNavigate } from "react-router-dom";
import { ListingSuccess } from "./ListingSuccess";

export function CreateListing() {
  const [listing, setListing] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(listingSchema),
  });

  const { user } = useKindeAuth();
  const userId = user?.id;
  const userName = user?.given_name;

  const header = watch("header");
  const price = watch("price");
  const canShip = watch("canShip");
  const category = watch("category");
  const color = watch("color");

  const onSubmit = async (data) => {
    console.log("Data submitted:", data);
    if (!userId || !userName) {
      setSubmitError("You must be logged in to create a listing");
      return;
    }

    const { image, ...rest } = data;
    let fullData = { ...rest, sellerID: userId, sellerName: userName };

    if (image && image.length > 0) {
      try {
        const base64 = await toBase64(image[0]);
        fullData.image = base64;
      } catch (error) {
        console.error("Error converting file to base64", error);
        setSubmitError("Error processing the image");
        return;
      }
    }

    productService
      .createListing(fullData)
      .then((response) => {
        console.log("Listing created:", response);
        setListing(response);
        navigate("/listing-success", { state: { listing: response } });
      })
      .catch((error) => {
        setSubmitError(error.message);
        console.error("Error creating listing:", error);
      });
  };
  if (listing) {
    return <ListingSuccess listing={listing} />;
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleGenerateDescription = async () => {
    if (!header || !price || !category || !color) {
      setDescriptionError(
        "All fields must be filled to generate a description"
      );
      return;
    }
    setDescriptionError(""); // Clear any existing errors if all fields are filled
    const description = await productService.generateDescription(
      header,
      price,
      canShip,
      category,
      color
    );
    setGeneratedDescription(description);
  };

  const handleCopyDescription = () => {
    setValue("description", generatedDescription);
  };

  return (
    <div className="flex justify-center bg-white-to-green min-h-screen">
      <form
        className="p-5 flex flex-col gap-10 max-w-2xl"
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
          label="Do you offer shipping for this product?"
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

        {descriptionError && <p className="text-red-500">{descriptionError}</p>}
        <button
          type="button"
          onClick={handleGenerateDescription}
          className="mt-2 mb-2 h-10 px-4 bg-blue-500 text-white font-bold py-2 rounded shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out flex justify-center items-center"
        >
          Generate Description With AI
        </button>

        {generatedDescription && (
          <div>
            <label htmlFor="generatedDescription">
              Generated Description With AI
            </label>
            <textarea
              id="generatedDescription"
              value={generatedDescription}
              readOnly
              className="w-full p-2 border"
            />
            <button
              type="button"
              onClick={handleCopyDescription}
              className="mt-2 h-10 px-4 bg-blue-500 text-white font-bold py-2 rounded shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out flex justify-center items-center"
            >
              Use AI Description
            </button>
          </div>
        )}

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

        {submitError && <p className="text-red-500">Error: {submitError}</p>}
        <div className="w-80">
          <button
            type="submit"
            className="h-10 px-4 bg-blue-500 text-white font-bold py-2 rounded shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out flex justify-center items-center"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
}
