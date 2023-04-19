import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";
const Carousell = () => {
  return (
    <>
      <div className={styles.carouse}>
        <Carousel className={styles.container}>
          <Carousel.Item interval={5000}>
            <div className={styles.caro}>
              <img
                className="d-block w-100"
                src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/275843721_728954565177870_1256115601375712024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2TWG1mmLix0AX-XIL1k&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBauaS5bq4M0Z66pftbxVmMR2oIAMO0TQzxVh1mXlKfVQ&oe=6442F86F"
                alt="First slide"
              />
            </div>
            <Carousel.Caption>BIENVENIDOS</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className={styles.caro}>
              <img
                className="d-block w-100"
                src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/309748296_570315154891969_4694736723102343789_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zgsLesGjy-4AX9SPrXO&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfACbrvAfwUCELKQMVvLPX0NhH67WO7YrZs_E2V0Ox3FDQ&oe=6442EFCA"
                alt="Second slide"
              />
            </div>
            <Carousel.Caption>BIENVENIDOS</Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className={styles.caro}>
              <img
                className="d-block w-100"
                src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/275615863_728954631844530_313288278115310213_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NTSesP30EwQAX_-hkG-&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfCZwQmVLAi0oyPuFCte-FNQavX-BNAv8yTN-o4Em8tkIA&oe=64448752"
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
             <Link to="/about">
              <button className={styles.but}>BIENVENIDOS</button>
             </Link>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carousell;
