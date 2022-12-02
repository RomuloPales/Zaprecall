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
    <Footer>0/4 Concluidos</Footer>
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