import Flashcards from "./Flashcards";
import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";

export default function Deck({cards}) {
    const [aberto, SetAberto] = useState ( null)


  return (
    <>
      <Header />
      {
        cards.map((c , i) => (
          <Flashcards 
          key = {i} 
          number = {i + 1}
          cardaberto ={() => SetAberto(i) }
          estaAberto = {i === aberto}
          pergunta = {c.question}
          resposta = {c.answer}
          />
        ))
      }
      {/* <BotaoFooter>
        <BotãoEscolha> não lembrei</BotãoEscolha>
        <BotãoEscolha>Quase não lembrei</BotãoEscolha>
        <BotãoEscolha>Zap!</BotãoEscolha>
      </BotaoFooter> */}
      <Footer>2/{cards.length} Concluidos</Footer>
    </>
  );
}

const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
const BotaoFooter = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  background-color: red;
`;

const BotãoEscolha = styled.div`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
`;
