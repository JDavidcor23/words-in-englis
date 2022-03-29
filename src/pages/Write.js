import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Buttons,
  CardsWords,
  ContainerCards,
  DivButtons,
} from "../styles/StyledTutorial";
import { words } from "../helpers/words";
import { urlError } from "../helpers/errores";
const Write = () => {
  const [page, setPage] = useState(0);
  const [input, setInput] = useState("");

  const handleCange = ({ target }) => {
    setInput(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (input === words[page].question) {
        if (page < 8) {
          setPage((prev) => prev + 1);
        } else {
          setPage(0);
        }
      } else {
        const random = Math.floor(Math.random() * urlError.length);
        Swal.fire({
          imageUrl: urlError[random],
          imageHeight: 300,
          html: `<h2>Recuerda que se escribe  "${words[page].question}"   </h2>`,
          imageAlt: "A tall image",
        });
      }
    }, 1000);
  };
  const playBreakSound = (id) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <ContainerCards>
      <CardsWords key={words[page].id}>
        <img
          src={words[page].giftQuestion}
          alt="question"
          style={{ width: "80%", height: "80%" }}
        />
        <p>
          Significado:
          {words[page].answer.map((answer) => (
            <strong key={answer}> {answer} </strong>
          ))}
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            onChange={handleCange}
            type="text"
            style={{
              margin: "20px 0",
              padding: "0 5px",
              fontSize: "1.2rem",
              borderRadius: "20px",
            }}
          />
          <DivButtons>
            <Buttons
              onClick={() => playBreakSound(`sound=${words[page].id}`)}
              type="button"
            >
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
              type="submit"
              style={{ border: "none", background: "none" }}
            >
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1648518468/althought/ojz0wrmhvkjwfbgpjh8n.png"
                alt="arrow"
                width="50px"
              />
            </button>
          </DivButtons>
        </form>
      </CardsWords>
    </ContainerCards>
  );
};

export default Write;
