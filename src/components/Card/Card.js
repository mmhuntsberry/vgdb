import React from "react";
import { Link } from "react-router-dom";
import {
  card__container,
  card__title,
  card__image,
  card__subtitle,
} from "./card.module.css";

const Card = ({ id, image, title, developer }) => {
  return (
    <li className={card__container}>
      <Link to={`/game/${id}`}>
        <img src={image} alt={title} className={card__image} />
        <h2 className={card__title}>{title}</h2>
        <h4 className={card__subtitle}>{developer}</h4>
      </Link>
    </li>
  );
};

export default Card;
