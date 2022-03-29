import { useState } from "react";
import { Link } from "react-router-dom";
import { words } from "../helpers/words";
import {
  Principal,
  ContainerCards,
  CardsWords,
  DivButtons,
  Buttons,
} from "../styles/StyledTutorial";

const Tutorial = () => {
  const [page, setPage] = useState(0);
  const changeWord = (back = false) => {
    if (page < 8) {
      setPage((prev) => prev + 1);
    } else {
      setPage(0);
    }
  };
  const playBreakSound = (id) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <Principal>
      <ContainerCards>
        <CardsWords key={words[page].id}>
          <img
            src={words[page].gift}
            alt={words[page].question}
            style={{ width: "80%", height: "80%" }}
          />
          <h2>{words[page].question}</h2>
          <p>
            Significado:
            {words[page].answer.map((answer) => (
              <strong key={answer}> {answer} </strong>
            ))}
          </p>
          <DivButtons>
            <Buttons onClick={() => playBreakSound(`sound=${words[page].id}`)}>
              <audio
                src={words[page].mp3}
                id={`sound=${words[page].id}`}
              ></audio>
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1645568520/althought/ptheneapqdzmv8ab3hxh.png"
                alt="logo"
                width="30px"
              />
            </Buttons>
            <button
              onClick={changeWord}
              style={{ border: "none", background: "none" }}
            >
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1648518468/althought/ojz0wrmhvkjwfbgpjh8n.png"
                alt="arrow"
                width="50px"
              />
            </button>
          </DivButtons>
        </CardsWords>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
            margin: "20px 0",
          }}
        >
          <h3>Creditos a:</h3>
          <Link
            to="https://www.youtube.com/watch?v=0M7cj6hRM7g&t=75s"
            target="_blank"
          >
            superholly
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=fT8YSmbjEQw&t=111s"
            target="_blank"
          >
            inglesamericano101
          </Link>
        </div>
      </ContainerCards>
    </Principal>
  );
};

export default Tutorial;
