import {
  apiResponseSchema,
  apiResponseToProduct,
  type Product,
} from "@/models";
import { useEffect, useState } from "react";
import type z from "zod";

interface FetchedProducts {
  loading: boolean;
  error: Error | null;
  products: Product[];
}

export const useProducts = (): FetchedProducts => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] =
    useState<z.infer<typeof apiResponseSchema>[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((resp) => resp.json())
        .then((prods) => {
          const products = prods.map((prod: unknown) =>
            apiResponseSchema.parse(prod),
          );
          setProducts(products);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };

    fetchProducts();
  }, []);

  const adaptedProducts: Product[] = [];

  if (products) {
    products.forEach((prod) => {
      const adaptedProd = apiResponseToProduct(prod);
      adaptedProducts.push(adaptedProd);
    });
  }

  return {
    loading,
    error,
    products: adaptedProducts,
  };
};
