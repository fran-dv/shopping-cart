import { Minus, Plus } from "lucide-react";
import styles from "./QuantitySelector.module.css";

interface Props {
  value: number;
  itemId: number;
  onIncrement: (itemId: number) => void;
  onDecrement: (itemId: number) => void;
  className?: string;
}

export const QuantitySelector = ({
  value,
  itemId,
  onIncrement,
  onDecrement,
  className,
}: Props) => {
  const handleIncrement = () => {
    onIncrement(itemId);
  };

  const hanldeDecrement = () => {
    onDecrement(itemId);
  };

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <button
        className={`${styles.button} ${styles.left}`}
        onClick={hanldeDecrement}
      >
        <Minus className={styles.icon} />
      </button>
      <div className={styles.value}>
        <p>{value}</p>
      </div>
      <button
        className={`${styles.button} ${styles.right}`}
        onClick={handleIncrement}
      >
        <Plus className={styles.icon} />
      </button>
    </div>
  );
};
