import React from "react";
import Title from "../components/Title";

const AboutUs = () => {
  return (
    <>
      <Title nombre="Nosotros" />
      <p>
        Somos un restaurante líder con 11 años de tradición, enfocado en
        preservar la sazón de la gastronomía peruana
      </p>
      <p>
        Sabores culinarios es más que un restaurante, es un hogar y lo demostramos
        en la calidez de nuestra atención en cada visita a esta casa y en los
        detalles de cada plato.
      </p>
      <a>
      <img src="images/restaurante1.png" />
      </a>
    </>
  );
};

export default AboutUs;
