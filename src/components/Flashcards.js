import { useState } from "react";
import styled from "styled-components";
import seta from "../assets/img/seta_play.png";
import circle from "../assets/img/seta_virar.png";
import colors from "../assets/css/colors"

export default function Flashcards({
  number,
  cardaberto,
  estaAberto,
  pergunta,
  respostas,
  indice
}) {
  const [respondido, SetResponddo] = useState(false);
  const [resposta, SetResposta] = useState ([])
  const [estado, SetEstado] = useState (null)
  const { RED, YELLOW, GREEN, GRAY} = colors
  

    function clickResposta(status){
      if(cardaberto !== null && estado === null){
        const novaResposta = [...resposta, {index : cardaberto, status: status }]
        SetResposta(novaResposta)
        cardaberto(null)
        SetEstado (novaResposta)
          }
    }
    
    function escolhaCor(){
      switch(resposta){
        case "erro":
          return RED
          case "quase":
          return YELLOW
          case "boa":
          return GREEN
        default:
          return GRAY
      }
     }

  return (
    <>
      {!estaAberto ? (
        <AnswerClosed>
          <AnswerOpenText color={escolhaCor()} data-test="flashcard" >Pergunta {number}</AnswerOpenText>
          <img src={seta} onClick={cardaberto} alt="setaimg" data-test="flashcard-text"  />
        </AnswerClosed>
      ) : (
        <AnswerOpen>
          {respondido ? (
            <>
             <p data-test="flashcard-text">{respostas}</p> 
              <BotaoFooter>
                <BotãoEscolha color={RED} onClick={() => clickResposta ("erro")} data-test="no-btn"> não lembrei</BotãoEscolha>
                <BotãoEscolha color={YELLOW} onClick={() => clickResposta ("quase")} data-test="partial-btn">Quase não lembrei</BotãoEscolha>
                <BotãoEscolha color={GREEN} onClick={() => clickResposta ("boa") } data-test="zap-btn">Zap!</BotãoEscolha>
              </BotaoFooter>
            </>
          ) : (
            <>
            <p data-test="flashcard-text">{pergunta}</p>
              
              <img src={circle}onClick={() => SetResponddo(true)}alt="circleimg" data-test="turn-btn"/>
            </>
          )}
        </AnswerOpen>
      )}
    </>
  );
}

const AnswerClosed = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AnswerOpenText = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color};
`;
const AnswerOpen = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const BotaoFooter = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
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
  background: ${props => props.color};
  border-radius: 5px;
  border: 1px solid ${props => props.color};
  padding: 5px;
  margin-left: 5px;
`;
