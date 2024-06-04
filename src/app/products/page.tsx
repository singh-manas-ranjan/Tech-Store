import React from "react";
import Link from "next/link";
import Product from "../../../public/productsData";
import Image from "next/image";
import styles from "./products.module.css";
import { notFound } from "next/navigation";

const Products = async () => {
  const response = await fetch("http://localhost:5001/productsList", {
    next: { revalidate: 30 },
  });
  const productsList: Product[] = await response.json();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Products</h1>
      </div>
      <div className={styles.productsContainer}>
        {productsList?.map((product, idx) => (
          <Link
            href={`/products/${String(product.id)}`}
            style={{ textDecoration: "none" }}
            key={idx}
          >
            <div className={styles.card}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={240}
                height={190}
                className={styles.image}
              />
              {product.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
