import React from "react";
import AddToCartBtn from "@/components/AddToCartBtn";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import Product from "../../../../public/productsData";
import Link from "next/link";
import styles from "./productId.module.css";
import { notFound } from "next/navigation";

interface Props {
  params: { productId: string };
}
const ProductDetails = async ({ params }: Props) => {
  let product = null;

  try {
    product = await axios
      .get<Product>(`http://localhost:5001/productsList/${params.productId}`)
      .then((res) => res.data);
  } catch (err) {
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
            <li key={`_category${product.id}`}>
              {" "}
              <b>Category</b>: {product.category}
            </li>
            <li key={`_brand${product.id}`}>
              {" "}
              <b>Brand</b> : {product.brand}
            </li>
            <li key={`_rating${product.id}`}>
              {" "}
              <b>Rating</b> : {product.rating}
            </li>
            <li key={`_price${product.id}`}>
              {" "}
              <b>Price</b> : {product.price}
            </li>
            <li>
              <AddToCartBtn product={product} />
            </li>
          </ul>
          {product.reviews && <h3>Reviews:</h3>}
          {product.reviews &&
            product.reviews!.map((review, idx) => (
              <Link
                href={`/products/${params.productId}/reviews/${
                  Number(idx) + 1
                }`}
                key={idx}
                className={styles.reviewsLink}
              >
                <ul key={`_ul${idx}`} className={styles.reviewItems}>
                  <li key={`_name${idx}`}>{review.name}</li>
                  <li key={`_review${idx}`}>
                    {review.review.substring(0, 30).concat("...")}
                  </li>
                </ul>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
