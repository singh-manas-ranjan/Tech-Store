import axios from "axios";
import Image from "next/image";
import React from "react";
import Product from "../../../../../../public/productsData";
import Link from "next/link";
import styles from "./reviewId.module.css";
import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}
const Review = async ({ params }: Props) => {
  let product = null;

  try {
    product = await axios
      .get<Product>(`http://localhost:5001/productsList/${params.productId}`)
      .then((res) => res.data);
  } catch (err) {
    notFound();
  }

  if (Number(params.reviewId) > 3) {
    notFound();
  }

  return (
    <div className={styles.container}>
      {product && (
        <div className={styles.innerContainer}>
          <h1 style={{ textAlign: "center" }}>{product.title}</h1>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              rowGap: ".5rem",
            }}
          >
            <li
              key={`_image${product.id}`}
              style={{
                display: "grid",
                placeItems: "center",
                paddingBottom: "1rem",
              }}
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={260}
                height={200}
              />
            </li>
            <li key={`_name${product.id}`}>
              {" "}
              <b>Name</b>: {product.title}
            </li>
            <li key={`_desc${product.id}`}>
              {" "}
              <b>Description</b> : {product.description}
            </li>
            <li key={`_brand${product.id}`}>
              {" "}
              <b>Brand</b> : {product.brand}
            </li>
            <li key={`_price${product.id}`}>
              {" "}
              <b>Price</b> : {product.price}
            </li>
            <li className={styles.user}>
              {product.reviews![Number(params.reviewId) - 1].name + " : "}
            </li>
            <li className={styles.review}>
              {product.reviews![Number(params.reviewId) - 1].review}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Review;
