import Link from "next/link";
import React from "react";
import styles from "./mainLayout.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Welcome to Tech Shop
      </h1>
    </div>
  );
};

export default Home;
