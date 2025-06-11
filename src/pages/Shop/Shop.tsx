import { useProducts } from "@/hooks";
import styles from "./Shop.module.css";
import { ProductCard } from "@/components";

export const Shop = () => {
  const { loading, error, products } = useProducts();

  const handleAddToCart = () => {
    console.log("Added to cart!");
  };

  console.log(products);
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
    </div>
  );
};
