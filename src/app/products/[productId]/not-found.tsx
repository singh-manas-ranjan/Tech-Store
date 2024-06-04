import Image from "next/image";
import React from "react";
import webpage from "../../../../public/webpage.png";
import styles from "./productId.module.css";

const NotFound = () => {
  return (
    <div className={styles.errorContainer}>
      <Image alt="404" src={webpage} />

      <h1>404 Product Not Found!</h1>
    </div>
  );
};

export default NotFound;
