import React from "react";
import { Link } from "react-router-dom";

const Gastronomia = () => {
  return (
    <div>
      <div>
        <h1>Nuestra Gastronomia</h1>
      </div>
      <div>
        <h4>By Pizza City</h4>
      </div>
      <div>
        <p>Contamos con diversos tipos de Pizzas, Chivitos y calzones.
            Ademas ofrecemos opciones para celiacos, veganos, y vegetarianos.
        </p>
      <div>
          <h1>PIZZAS</h1>
          <p>Pizza 1</p>
          <p>Pizza 2</p>
          <p>Pizza 3</p>
          <p>Pizza 4</p>
      </div>
      <div>
          <h1>CHIVITOS</h1>
          <p>Chivito 1</p>
          <p>Chivito 2</p>
      </div>
      <div>
          <h1>CALZONES</h1>
          <p>Calzone 1</p>
          <p>Calzone 2</p>
          <p>Calzone 3</p>
      </div>
      <div>
        <h1>Celiacos</h1>
        <h1>Vegetarianos</h1>
        <h1>Veganos</h1>
      </div>
      <Link to={"/menus"}> <button>Ver Menus</button> </Link>
      </div>
    </div>
  );
};

export default Gastronomia;