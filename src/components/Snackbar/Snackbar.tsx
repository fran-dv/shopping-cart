import { X } from "lucide-react";
import styles from "./Snackbar.module.css";
import { useEffect, useState } from "react";

interface Props {
  content: string;
  seconds: number;
  showUndoBtn?: boolean;
  onUndo?: () => void;
  onClose: () => void;
}

export const Snackbar = ({
  content,
  seconds,
  showUndoBtn = false,
  onUndo,
  onClose,
}: Props) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const delayInMilliseconds = seconds * 1000;
    setTimeout(() => {
      setOpen(false);
      onClose();
    }, delayInMilliseconds);
  }, [seconds, onClose]);

  const close = () => {
    setOpen(false);
    onClose();
  };

  const handleUndo = () => {
    if (onUndo) {
      onUndo();
      close();
    }
  };

  const handleClick = () => {
    close();
  };

  return (
    <div className={`${styles.container} ${!open && styles.hidden}`}>
      <h4>{content}</h4>
      <div className={styles.actionsContainer}>
        {showUndoBtn && (
          <button className={styles.undoBtn} onClick={handleUndo}>
            <p>UNDO</p>
          </button>
        )}
        <X className={styles.closeIcon} onClick={handleClick} />
      </div>
    </div>
  );
};
