import { QuantitySelector } from "@/components";
import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";

interface Props {
  title: string;
  amount: number;
  price: number;
  id: number;
  imageSrc: string;
  onIncrement: (itemId: number) => void;
  onDecrement: (itemId: number) => void;
  onDelete: (itemId: number) => void;
}

export const CartItem = ({
  title,
  price,
  amount,
  id,
  imageSrc,
  onIncrement,
  onDecrement,
  onDelete,
}: Props) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.contentBottom}>
          <h4>${price}</h4>
          <QuantitySelector
            value={amount}
            itemId={id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            className={styles.quantitySelector}
          />
        </div>
      </div>
      <div className={styles.endColumn}>
        <Trash2 className={styles.icon} onClick={handleDelete} />
      </div>
    </div>
  );
};
