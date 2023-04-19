import React from "react";
import Carousell from "../Carousel/Carousel";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Carousell />
      <div className={styles.letter}>
        <span className={styles.spanto}>AVENTURINA</span>
      </div>
      <div>
        <h1>Catalogo</h1>
      </div>
      <div>
        <h1>Catalogo</h1>
      </div>
      <div>
        <h1>Catalogo</h1>
      </div>
      <div>
        <h1>Pepito</h1>
      </div>
      
    </>
  );
};

export default Home;
