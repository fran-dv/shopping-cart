import styles from "./Button.module.css";

interface Props {
  content: string;
  cta?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ content, cta, className, onClick }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <p>{content}</p>
      {cta && <p>→</p>}
    </button>
  );
};
