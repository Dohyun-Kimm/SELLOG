import styled from "styled-components";

export const SMain = styled.main`
  position: relative;
  height: 100%;
  background-color: var(--color-beige);
  border-color: black;
  border: 12px solid;
  .sticker1 {
    position: absolute;
    left: 6vw;
    bottom: 3rem;
    width: 8vw;
  }
  .sticker2 {
    position: absolute;
    width: 9vw;
    right: 5vw;
    top: 15vh;
  }
`;

export const SHeader = styled.header`
  height: 20%;
  margin-bottom: 4%;

  .home {
    /* position: absolute; */
    width: 0px;
    height: 0px;
    border-top: 89px solid black;
    border-left: 0px solid transparent;
    border-right: 593px solid transparent;
  }
  .go-to-home {
    background-color: var(--color-green);
    color: var(--color-white);
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 8vw;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid black;
    padding: 0.5rem 0.8rem;
    font-size: 1.6rem;
    font-family: "Chicle", cursive;
    transform: rotate(-9.93deg);
  }
  .title__container {
    display: flex;
    margin-inline: 20%;
    font-family: "Chicle", cursive;
    font-size: 4rem;
    justify-content: center;
  }
  .title__text {
    margin: 0%;
  }
  .developer {
    background-color: var(--color-orange);
    text-align: center;
    font-family: "Chicle", cursive;
    margin-right: 3%;
    padding-inline: 5%;
    transform: rotate(3.16deg);
  }
  .feed {
    background-color: var(--color-orange);
    text-align: center;
    padding-inline: 5%;
    transform: rotate(-1.82deg);
  }
`;
export const SBody = styled.div`
  margin-inline: 10%;
  /* margin-block: 3%; */
  height: 70%;
  justify-content: space-evenly;
  display: flex;
  .feed__box {
    /* height: 90%; */
    overflow-y: scroll;
    width: 60%;
  }
  .feed__box ::-webkit-scrollbar {
    scrollbar-width: none;
    display: none;
  }
`;

export const SSection = styled.section`
  width: 18%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  input {
    width: 95%;
    height: 15%;
  }
  .search {
    background-color: var(--color-white);
    margin-bottom: 10%;
    border-radius: 20px;
    /* height: 40%; */
    padding: 10%;
    padding-bottom: 20%;
    box-shadow: 2px 2px 1px 1px grey;
    overflow-y: hidden;
  }
  .keyword__button {
    background-color: var(--color-dark-white);
    border-radius: 4px;
    margin: 1px;
  }
  .mostviewed {
    background-color: var(--color-white);
    margin-block: 5%;
    border-radius: 20px;
    /* height: 40%; */
    padding: 4%;
    padding-inline: 8%;
    box-shadow: 2px 2px 1px 1px grey;
  }
  .mostviewed__list {
    padding: 5%;
  }
`;
