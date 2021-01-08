import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  hero__container,
  hero__image,
  hero__text__container,
  hero__title,
  hero__details,
} from "./show.module.css";

const Show = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://vgdb.vercel.app/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGame(...data));
    console.log(id);
    console.log(game);
  }, []);

  return (
    <div>
      {game ? (
        <>
          <div className={hero__container}>
            <div className={hero__text__container}>
              <h1 className={hero__title}>{game.title}</h1>
              <span className={hero__details}>{game.release_year}</span>
              <span className={hero__details}>{game.developer}</span>
            </div>
            <img src={game.hero} alt="" className={hero__image} />
          </div>
          <img src={game.box_art} alt={game.title} />
          <p>{game.synopsis || "No synopsis is available."}</p>
          {/* <video src={game.trailer}></video> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Show;
