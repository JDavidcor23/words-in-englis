import { useState } from "react";
import { Principal } from "./styles/StyledHome";
import Presentation from "./components/Presentation";
function App() {
  const [isTrue, setIsTrue] = useState(true);
  const words = [
    {
      id: 1,
      question: "thought",
      answer: ["pensamiento", "idea", "reflexión"],
      gift: "https://media1.giphy.com/media/StExW8gArYmX8S29gF/giphy-downsized-large.gif?cid=790b76113476f2c2daa7857c6c68028645417a1ffedef77b&rid=giphy-downsized-large.gif&ct=g",
      mp3: "./mp3/hought.mp3",
    },
    {
      id: 2,
      question: "taught",
      answer: ["enseñó"],
      gift: "https://media2.giphy.com/media/vVKqa0NMZzFyE/giphy.gif",
      mp3: "./mp3/taught.mp3",
    },
    {
      id: 3,
      question: "though",
      answer: ["aunque", "siquiera"],
      gift: "https://media3.giphy.com/media/mMDWlDyNZVFaF0hMwb/giphy.gif",
      mp3: "./mp3/though.mp3",
    },
    {
      id: 3,
      question: "tough",
      answer: ["duro", "resistente", "difícil", "dura"],
      gift: "https://media4.giphy.com/media/XedfdoHMFSqDVFO0ng/200.gif",
      mp3: "./mp3/tough.mp3",
    },
    {
      id: 4,
      question: "through",
      answer: ["a través de", "mediante", "por"],
      gift: "https://media2.giphy.com/media/28EChulqH2qgHKnhom/giphy.gif?cid=790b7611844da1fb99f2c2dea2a60115a30be8b9d6dea2af&rid=giphy.gif&ct=g",
      mp3: "./mp3/through.mp3",
    },
    {
      id: 6,
      question: "thorough",
      answer: ["minucioso", "a fondo", "exhaustivo"],
      gift: "https://media2.giphy.com/media/3og0IQttlo3NfcsIiQ/giphy.gif",
      mp3: "./mp3/thorough.mp3",
    },
    {
      id: 7,
      question: "throughout",
      answer: ["en todo", "durante todo"],
      gift: "throughout",
      mp3: "./mp3/throughout.mp3",
    },
    {
      id: 8,
      question: "even though",
      answer: ["aunque"],
      gift: "https://media2.giphy.com/media/hQcYMKa8lNA3ea2KpT/giphy.gif",
      mp3: "./mp3/even_though.mp3",
    },
    {
      id: 9,
      question: "although",
      answer: ["aunque", "a pesar de que"],
      gift: "https://media3.giphy.com/media/QvSc4aNCQDywpljmjM/200.gif?cid=790b76115da44e3818b933a1938eb4827bb306306d345cd0&rid=200.gif&ct=g",
      mp3: "./mp3/although.mp3",
    },
  ];
  return (
    <Principal>
      <div>
        <Presentation isTrue={isTrue} setIsTrue={setIsTrue} />
        <div key={words[0].id}>
          <img src={words[0].gift} alt={words[0].question} />
          <h2>
            {words[0].question} = {words[0].answer[0]}
          </h2>
          <audio src="./mp3/throughout.mp3" controls="" />
          <input type="text" />
        </div>
      </div>
    </Principal>
  );
}

export default App;
