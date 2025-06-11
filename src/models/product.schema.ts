import { z } from "zod";
import type { Product } from "./product";

export const apiResponseSchema = z.object({
  category: z.string(),
  description: z.string(),
  id: z.number(),
  image: z.string(),
  price: z.number(),
  title: z.string(),
});

export const apiResponseToProduct = (
  apiResponse: z.infer<typeof apiResponseSchema>,
): Product => {
  return {
    id: apiResponse.id,
    category: apiResponse.category,
    title: apiResponse.title,
    description: apiResponse.description,
    image: apiResponse.image,
    price: apiResponse.price,
  };
};
