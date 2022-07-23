import React from "react";
import styles from "../styles/loader.module.css";

function Loader() {
  return (
    <>
      <div className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loader;
