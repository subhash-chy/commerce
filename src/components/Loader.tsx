import React from "react";
import styles from "../styles/loader.module.css";

function Loader() {
  return (
    <>
      <div className={styles.container}>
        <p>Loading</p>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loader;
