import { useProducts } from "@/hooks";
import styles from "./Shop.module.css";
import { ProductCard } from "@/components";
import { useCartStore } from "@/stores";
import { useState } from "react";
import { Snackbar } from "@/components";

interface SnackbarState {
  open: boolean;
  content: string;
  showUndo: boolean;
  onUndo?: () => void;
}

export const Shop = () => {
  const { loading, error, products } = useProducts();
  const { addItemToCart, removeItem } = useCartStore();
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    content: "",
    showUndo: false,
  });

  const handleAddToCart = (productId: number) => {
    const product = products.find((prod) => prod.id === productId);
    if (!product) {
      console.error(`Product with id ${productId} does not exist`);
      return;
    }
    const success = addItemToCart(product);

    const handleUndo = () => {
      removeItem(product.id);
    };
    if (success) {
      setSnackbar({
        open: true,
        content: "Item added to the car",
        showUndo: true,
        onUndo: handleUndo,
      });
    } else {
      setSnackbar({
        open: true,
        content: "Item already in cart",
        showUndo: false,
      });
    }
  };

  return (
    <div className={styles.shopContainer}>
      {loading && (
        <div className={styles.loading}>
          <h2>Loading products...</h2>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <h2>There was an error fetching the products: {error.message}</h2>
        </div>
      )}
      {!loading && products && (
        <>
          <div className={styles.header}>
            <h1>Our mock products</h1>
          </div>

          <div className={styles.productsContainer}>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                description={p.description}
                imageSrc={p.image}
                onClickAddToCart={handleAddToCart}
                price={p.price}
              />
            ))}
          </div>
        </>
      )}
      {snackbar && snackbar.open && (
        <Snackbar
          content={snackbar.content}
          seconds={4}
          showUndoBtn={snackbar.showUndo}
          onUndo={snackbar.onUndo}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        />
      )}
    </div>
  );
};
