import { Paths } from "@/routes";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ShoppingBag } from "lucide-react";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>Mock store</h2>
      </div>
      <div className={styles.linksContainer}>
        <Link to={Paths.HOME} className={styles.link}>
          <p>HOME</p>
        </Link>
        <Link to={Paths.SHOP} className={styles.link}>
          <p>SHOP</p>
        </Link>
        <Link to={Paths.CART} className={styles.link} title="Go to cart">
          <ShoppingBag className={styles.navIcon} />
        </Link>
      </div>
    </div>
  );
};
