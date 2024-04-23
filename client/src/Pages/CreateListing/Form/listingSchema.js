import { z } from "zod";

export const listingSchema = z.object({
  header: z.string().min(1, { message: "Header is required" }),
  price: z.number().min(0, { message: "Price must be a non-negative number" }),
  canShip: z.boolean(),
  category: z.string().min(1, { message: "Category is required" }),
  color: z.string(),
  description: z.string().min(1, { message: "Description is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  image: z.string().min(1, { message: "Picture must be a Base64 string" }),
});
