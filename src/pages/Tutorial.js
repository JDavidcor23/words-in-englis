import { useState } from "react";
import {
  Principal,
  ContainerCards,
  CardsWords,
  DivButtons,
  Buttons,
} from "../styles/StyledTutorial";
// import Presentation from "../components/Presentation";
import Navbar from "../components/Navbar";
const words = [
  {
    id: 1,
    question: "thought",
    answer: ["pensamiento", "idea", "reflexión"],
    gift: "https://media1.giphy.com/media/StExW8gArYmX8S29gF/giphy-downsized-large.gif?cid=790b76113476f2c2daa7857c6c68028645417a1ffedef77b&rid=giphy-downsized-large.gif&ct=g",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645561828/althought/q6s4nqxyokvsmcypqhgl.mp3",
  },
  {
    id: 2,
    question: "taught",
    answer: ["enseñó"],
    gift: "https://media2.giphy.com/media/vVKqa0NMZzFyE/giphy.gif",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645561869/althought/owrrzce3swoivvldj32v.mp3",
  },
  {
    id: 3,
    question: "though",
    answer: ["aunque", "siquiera"],
    gift: "https://media3.giphy.com/media/mMDWlDyNZVFaF0hMwb/giphy.gif",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645562426/althought/though.mp3",
  },
  {
    id: 4,
    question: "tough",
    answer: ["duro", "resistente", "difícil", "dura"],
    gift: "https://media4.giphy.com/media/XedfdoHMFSqDVFO0ng/200.gif",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645562753/althought/srjgueleamobayojta2i.mp3",
  },
  {
    id: 6,
    question: "through",
    answer: ["a través de", "mediante", "por"],
    gift: "https://media2.giphy.com/media/28EChulqH2qgHKnhom/giphy.gif?cid=790b7611844da1fb99f2c2dea2a60115a30be8b9d6dea2af&rid=giphy.gif&ct=g",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645563115/althought/through.mp3",
  },
  {
    id: 7,
    question: "thorough",
    answer: ["minucioso", "a fondo", "exhaustivo"],
    gift: "https://media2.giphy.com/media/3og0IQttlo3NfcsIiQ/giphy.gif",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645563166/althought/thorough.mp3",
  },
  {
    id: 8,
    question: "throughout",
    answer: ["en todo", "durante todo"],
    gift: "https://media2.giphy.com/media/l4EpjhuB46oM2KFzO/giphy.gif?cid=ecf05e47izk3p4h8mxy5buq787tsls117u1bs1h65vfniyed&rid=giphy.gif&ct=g",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645563228/althought/throughout.mp3",
  },
  {
    id: 9,
    question: "even though",
    answer: ["aunque"],
    gift: "https://media2.giphy.com/media/hQcYMKa8lNA3ea2KpT/giphy.gif",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645563272/althought/even_though.mp3",
  },
  {
    id: 10,
    question: "although",
    answer: ["aunque", "a pesar de que"],
    gift: "https://media3.giphy.com/media/QvSc4aNCQDywpljmjM/200.gif?cid=790b76115da44e3818b933a1938eb4827bb306306d345cd0&rid=200.gif&ct=g",
    mp3: "https://res.cloudinary.com/dhu6ga6hl/video/upload/v1645563722/althought/although.mp3",
  },
];

const Tutorial = () => {
  // const [isTrue, setIsTrue] = useState(false);
  const [page, setPage] = useState(0);
  const changeWord = (back = false) => {
    if (page < 8) {
      setPage((prev) => prev + 1);
      console.log(page);
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
      <Navbar />
      <ContainerCards>
        <CardsWords key={words[page].id}>
          <img
            src={words[page].gift}
            alt={words[page].question}
            style={{ width: "80%" }}
          />
          <h2>
            {words[page].question} = {words[page].answer[0]}
          </h2>
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
            <button onClick={changeWord}>next</button>
          </DivButtons>
        </CardsWords>
      </ContainerCards>
    </Principal>
  );
};

export default Tutorial;
