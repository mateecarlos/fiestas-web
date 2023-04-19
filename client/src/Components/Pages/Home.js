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
      <div className={styles.titulo1}>
        <h2>Salon de fiestas Infantiles y Eventos</h2>
      </div>
      <div className={styles.titulo2}>
        <h4>Te brindamos el mejor servicio para la fiesta que siempre soñaste</h4>
      </div>
      <div className={styles.titulo3}>
        <h4>Montevideo - Uruguay</h4>
      </div>
      
    </>
  );
};

export default Home;
