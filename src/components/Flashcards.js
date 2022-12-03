import styled from "styled-components";
import seta from "../assets/img/seta_play.png";
import circle from "../assets/img/seta_virar.png";
export default function Flashcards({ number, cardaberto, estaAberto,pergunta }) {
  return (
    <>
      {!estaAberto ? (
        <AnswerClosed >
          <AnswerOpenText>Pergunta {number}</AnswerOpenText>
          <img src={seta} onClick ={cardaberto}  alt="setaimg" />
        </AnswerClosed>
      ) : (
        <AnswerOpen>
          {pergunta}
          <img src={circle}  alt="circleimg" />
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
  color: #333333;
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
