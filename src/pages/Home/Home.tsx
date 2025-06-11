import { Button } from "@/components";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Paths } from "@/routes";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(Paths.SHOP);
  };

  return (
    <>
      <div className={styles.hero}>
        <h1>Welcome to the mock store!</h1>
        <h3>
          This is actually only a mock shopping cart made for practice purposes
        </h3>
        <p>
          Browse our amazing selection of imaginary products. No wallet
          required—just your imagination!
        </p>
        <Button
          onClick={handleClick}
          content="Explore products"
          cta={true}
          className={styles.cta}
        />
      </div>
    </>
  );
};
