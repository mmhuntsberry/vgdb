import React, { useEffect, useState } from "react";
import Card from "../Card";
import { list__container } from "./list.module.css";

const List = ({ search }) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://vgdb.vercel.app/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleFilterByTitle = (title) => title.toLowerCase().includes(search);

  return (
    <ul className={list__container}>
      {games ? (
        games
          .filter((game) => handleFilterByTitle(game.title))
          .map((game) => (
            <Card
              key={game.id}
              id={game.id}
              title={game.title}
              image={game.box_art}
              developer={game.developer}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default List;
