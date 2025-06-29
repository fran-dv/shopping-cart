import { Button } from "../Button";
import styles from "./ProductCard.module.css";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  price: number;
  onClickAddToCart: (productId: number) => void;
  id: number;
}

export const ProductCard = ({
  title,
  description,
  imageSrc,
  price,
  onClickAddToCart,
  id,
}: Props) => {
  const shortTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;
  const shortDescription =
    description.length > 80 ? description.slice(0, 80) + "..." : description;

  const handleClick = () => {
    onClickAddToCart(id);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div>
        <h2>{shortTitle}</h2>
      </div>
      <div className={styles.description}>
        <p>{shortDescription}</p>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.price}>
          <h3>${price}</h3>
        </div>
        <div className={styles.addToCart}>
          <Button
            onClick={handleClick}
            content="Add to cart"
            className={styles.addToCartBtn}
          />
        </div>
      </div>
    </div>
  );
};
