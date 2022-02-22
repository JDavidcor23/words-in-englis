import React, { useState } from "react";
import {
  Container,
  Modal,
  Button,
  ButtonLanguage,
} from "../styles/StyledPresentacion";
const Presentation = ({ isTrue, setIsTrue }) => {
  const [language, setlanguage] = useState(true);
  return (
    <div>
      {isTrue && (
        <Container>
          {language ? (
            <Modal>
              <h1> Hello welcome</h1>
              <ButtonLanguage onClick={() => setlanguage(!language)}>
                <img
                  src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643899660/kwdui0tfevefjfrodptp.png"
                  width="50px"
                  alt="change language to Spanish"
                />
              </ButtonLanguage>
              <p>
                My name is Jorge David Diaz, i am frontend developer, in my job
                I need to learn english because mostly all the documentation and
                video tutorials are in english there are words that are a little
                difficult for me as those that are written and sound very much
                alike as through, throught, tought, etc. That's why I made this
                little application to practice my English. I hope you enjoy it
                and if you want to help me to grow more the application I invite
                you to my github account
                <a href="https://github.com/JDavidcor23"> here</a>
              </p>

              <Button onClick={() => setIsTrue(!isTrue)}>Continue</Button>
            </Modal>
          ) : (
            <Modal>
              <h1> Hola bienvenid@</h1>
              <ButtonLanguage onClick={() => setlanguage(!language)}>
                <img
                  src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643899665/vrnwjextes3yqq1sochv.jpg"
                  width="50px"
                  alt="change language to Spanish"
                />
              </ButtonLanguage>
              <p>
                Mi nombre es Jorge David Diaz, soy desarrollador frontend, en mi
                trabajo necesito aprender inglés ya que en su mayoría toda la
                documentación y videos tutoriales están en inglés hay palabras
                que se me dificultan un poco como las que se escriben y suenan
                muy parecidas como through, throught, tought, etc. Por eso hice
                esta pequeña aplicación para practicar mi inglés. Espero que la
                disfruten y si quieren ayudarme a crecer más la aplicación los
                invito a mi cuenta de github
                <a href="https://github.com/JDavidcor23"> aqui</a>
              </p>
              <Button onClick={() => setIsTrue(!isTrue)}>Continuar</Button>
            </Modal>
          )}
        </Container>
      )}
    </div>
  );
};

export default Presentation;
