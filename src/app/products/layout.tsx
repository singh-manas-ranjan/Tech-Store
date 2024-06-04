import React from "react";
import styles from "./products.module.css";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
}
const ProductLayout = ({ children }: Props) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.logoLink} href={"/"}>
          <h2>Tech Store</h2>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.item}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.item}>
            <Link href={"/products"}>Products</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default ProductLayout;
