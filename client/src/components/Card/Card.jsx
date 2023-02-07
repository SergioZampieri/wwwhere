import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Place({ place }) {

let  divisor  = place.rating.reduce((valorAnterior, valorActual) => (valorAnterior + valorActual));
let dividendo = place.rating.reduce(function(valorAnterior, valorActual, indice){
  return valorAnterior + valorActual * (indice +1)})
let ratin = dividendo/divisor 

  return (
    <div className={style.places}>
      {place.available ? (
          <Link className={style.place} to={`/detail/${place.id}`}>
            <img src={place.image} className={style.logo} alt="img" />
            <div className={style.textContainer}>
              <div className={style.text}>
                <h3>{place.name}</h3>
                <h4>{place.category}</h4>
              </div>
              <div className={style.numbersInfo}>
                <h4>
                  {ratin.toFixed(1)}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ic%C3%B4ne_%C3%A9toile_d%27or_%C3%A0_cinq_branches.svg/200px-Ic%C3%B4ne_%C3%A9toile_d%27or_%C3%A0_cinq_branches.svg.png"
                    height="20px"
                    width="20px"
                  />
                </h4>
                <h4>Edad {place.ageRange}</h4>
              </div>
            </div>
          </Link>
        
      ) : (
        
          <div className={style.placedisabled}>
            <img src={place.image[0]} className={style.logodisabled} alt="img" />
            <div className={style.textContainer}>
              <div className={style.text}>
                <h3>{place.name}</h3>
                <h4>{place.category}</h4>
              </div>
              <div className={style.numbersInfo}>
                <h4>
                  {place.rating}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ic%C3%B4ne_%C3%A9toile_d%27or_%C3%A0_cinq_branches.svg/200px-Ic%C3%B4ne_%C3%A9toile_d%27or_%C3%A0_cinq_branches.svg.png"
                    height="20px"
                    width="20px"
                  />
                </h4>
                <h4>Edad {place.ageRange}</h4>
              </div>
            </div>
          </div>
        
      )}
    </div>
  );
}
