import Flashcards from "./Flashcards";
import styled from "styled-components"
import Header from "./Header";


export default function Deck() {
  return (

    <>
    <Header/>
    <Flashcards />
    <Flashcards />
    <Flashcards />
    <BotaoFooter>
        <BotãoEscolha> não lembrei</BotãoEscolha>
        <BotãoEscolha>Quase não lembrei</BotãoEscolha>
        <BotãoEscolha>Zap!</BotãoEscolha>

    </BotaoFooter>
    <Footer >2/4 Concluidos</Footer>
    </>
  )
}

const Footer = styled.div `

  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
const BotaoFooter = styled.div `

  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`

const BotãoEscolha = styled.div `
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
`