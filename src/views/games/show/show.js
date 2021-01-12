import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  hero__container,
  hero__image,
  hero__text__container,
  hero__title,
  hero__details,
  hero__image__container,
  game__info__container,
  game__art,
  game__synopsis,
  game__trailer,
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
            <div
              style={{ backgroundImage: `url(${game.hero})` }}
              className={hero__image}
            ></div>
          </div>
          <div className={game__info__container}>
            <aside>
              <img className={game__art} src={game.box_art} alt={game.title} />
            </aside>
            <section>
              <p className={game__synopsis}>
                {game.synopsis || "No synopsis is available."}
              </p>
              <iframe
                className={game__trailer}
                title={game.title}
                src={game.trailer}
                frameborder="0"
              ></iframe>
            </section>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Show;
