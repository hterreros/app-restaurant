import React from "react";
import Title from "../components/Title";

const Blog = () => {
  return (
    <>
      <Title nombre="Blog" />
      <div className="container">
        <div className="well">
          <div className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="./images/plato3.png"
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Prefiero recomendar el consumo de uvas antes que la copita de vino diaria</h4>
              <p className="text-right">Por Francisco</p>
              <p>
              Para quienes no han llevado una vida ordenada y responsable en cuanto a hábitos de consumo y se preguntan si aún están
              dentro del tiempo para cambiar su estilo de vida y beneficiarse de él, la experta nos da una luz de esperanza y nos alienta: 
              “¡Claro que sí! Evidentemente, mientras antes se inicie, mejor, pero aquello no quiere decir que alguien no se vea beneficiado
               de una buena alimentación si la inicia más adelante en su vida”; entonces, sea cual sea tu edad, ¡estás a tiempo!
              </p>
              <ul className="list-inline list-unstyled">
                <li>
                  <span>
                    <i className="glyphicon glyphicon-calendar" /> 2 days, 8
                    hours{" "}
                  </span>
                </li>
                <span>
                  <i className="glyphicon glyphicon-comment" /> 2 comments
                </span>
                <li>
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star-empty" />
                </li>
                
                <li>
                  {/* Use Font Awesome http://fortawesome.github.io/Font-Awesome/ */}
                  <span>
                    <i className="fa fa-facebook-square" />
                  </span>
                  <span>
                    <i className="fa fa-twitter-square" />
                  </span>
                  <span>
                    <i className="fa fa-google-plus-square" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="well">
          <div className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="./images/plato2.png"
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">El futuro de los restaurantes tras la Covid-19</h4>
              <p className="text-right">Por Anailuj</p>
              <p>
              La industria turística y hotelera mundial se enfrenta a una serie de desafíos de supervivencia en el mercado, un escenario en el que
              todos los que la conforman se han visto en la obligación de reinventarse a través de la innovación y transformación digital. Como parte 
              del proceso, un sinnúmero de emprendimientos gastronómicos se ha inspirado en ciertos modelos empresariales de los cuales, haciendo uso 
              de las tecnologías de la información, han reciclado una propuesta gastronómica ideal para afrontar la crisis económica.
              </p>
              <ul className="list-inline list-unstyled">
                <li>
                  <span>
                    <i className="glyphicon glyphicon-calendar" /> 2 days, 8
                    hours{" "}
                  </span>
                </li>
                <span>
                  <i className="glyphicon glyphicon-comment" /> 2 comments
                </span>
                <li>
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star-empty" />
                </li>
                <li>
                  {/* Use Font Awesome http://fortawesome.github.io/Font-Awesome/ */}
                  <span>
                    <i className="fa fa-facebook-square" />
                  </span>
                  <span>
                    <i className="fa fa-twitter-square" />
                  </span>
                  <span>
                    <i className="fa fa-google-plus-square" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
