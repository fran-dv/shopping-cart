import { useCartStore } from "@/stores";
import styles from "./Cart.module.css";
import { Button, CartItem } from "@/components";
import { useNavigate } from "react-router-dom";
import { Paths } from "@/routes";

export const Cart = () => {
  const { items, incrementItemAmount, decrementItemAmount, removeItem } =
    useCartStore();
  const navigate = useNavigate();

  const subtotalPrice = items.reduce(
    (subtotal, it) => subtotal + it.product.price * it.amount,
    0,
  );
  const deliveryCost = 20;
  const totalPrice = subtotalPrice + deliveryCost;

  const handleCheckout = () => {};

  return (
    <div className={styles.container}>
      {items.length === 0 && (
        <div className={styles.emptyView}>
          <h3>You don't have any products in your cart yet. Add some!</h3>
          <Button
            content="Go to products!"
            cta={true}
            onClick={() => navigate(Paths.SHOP)}
          />
        </div>
      )}
      {items.length > 0 && (
        <>
          <h2 className={styles.title}>Your cart</h2>
          <div className={styles.contentContainer}>
            <div className={styles.itemsContainer}>
              {items.map((it) => (
                <CartItem
                  key={it.id}
                  title={it.product.title}
                  price={it.product.price}
                  amount={it.amount}
                  id={it.id}
                  imageSrc={it.product.image}
                  onIncrement={(itemId: number) => incrementItemAmount(itemId)}
                  onDecrement={(itemId: number) => decrementItemAmount(itemId)}
                  onDelete={(itemId: number) => removeItem(itemId)}
                />
              ))}
            </div>

            <div className={styles.orderInfo}>
              <div className={styles.section}>
                <h4>Subtotal: </h4>
                <p>${subtotalPrice.toFixed(2)}</p>
              </div>

              <div className={styles.section}>
                <h4>Delivery: </h4>
                <p>${deliveryCost.toFixed(2)}</p>
              </div>

              <div className={`${styles.section} ${styles.total}`}>
                <h4>Total: </h4>
                <p>${totalPrice.toFixed(2)}</p>
              </div>

              <div className={`${styles.section} ${styles.checkout}`}>
                <Button
                  content="Checkout"
                  onClick={handleCheckout}
                  className={styles.button}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
