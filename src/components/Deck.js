import Flashcards from "./Flashcards";
import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";

export default function Deck({cards}) {
    const [aberto, SetAberto] = useState ( null)
    const [resposta, SetResposta] = useState ([])

    function clickResposta(status){

      if(aberto !== null){
        const novaResposta = [...resposta, {index : aberto, status: status }]
        SetResposta(novaResposta)
        aberto(null)
      }

    }
    function getCardStatus(i) {
      const card = resposta.find((a) => a.index === i)
      if (card !== null && card !== undefined) {
          return card.status
      } else {
          return "no status"
      }
  }
  
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
          respostas = {c.answer}
          perguntaAberta = {() => clickResposta}
          status = {getCardStatus(i)}

          />
        ))
      }
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
