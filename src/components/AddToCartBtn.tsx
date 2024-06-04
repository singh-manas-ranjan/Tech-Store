"use client";
import React from "react";
import Product from "../../public/productsData";
interface Props {
  product: Product;
}
const AddToCartBtn = ({ product }: Props) => {
  return (
    <div>
      <button
        style={{ width: "120px", height: "25px", cursor: "pointer" }}
        onClick={() => console.log(`${product.title} is added to cart.`)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
