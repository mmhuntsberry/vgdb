import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = ({}) => {
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
          <h1>{game.title}</h1>
          <span>{game.release_year}</span>
          <img src={game.box_art} alt={game.title} />
          <p>{game.synopsis || "No synopsis is available."}</p>
          <video src={game.trailer}></video>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Show;
