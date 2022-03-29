import React from "react";
import { CardsWords, ContainerCards } from "../styles/StyledTutorial";
import { games } from "../helpers/games";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <ContainerCards>
      {games.map((game) => (
        <Link
          to={game.link}
          key={`game${game.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardsWords>
            <img
              src={game.img}
              alt=""
              style={{ width: "80%", height: "80%" }}
            />
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                width: "90%",
                textAlign: "center",
              }}
            >
              {game.name_english}
            </p>
          </CardsWords>
        </Link>
      ))}
    </ContainerCards>
  );
};

export default Games;
