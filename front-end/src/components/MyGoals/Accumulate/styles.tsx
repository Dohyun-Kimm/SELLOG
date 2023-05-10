import styled from "styled-components";

export const SSection = styled.section`
  background-color: #f3ebd9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 30vw;
  border-radius: 20px;
  border: 2px solid #423e33;
  box-shadow: 5px 5px 3px #423e33;

  .goal_logo {
    height: 70px;
    width: 70px;
  }

  .steps__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .accumulate__container {
    text-align: center;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .number {
    background-color: #ff9d9d;
    border-radius: 20px;
    width: 80%;
    padding: 8px;
    font-family: "ZCOOL KuaiLe", sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 1vw;
  }
  .acc__day__wrapper {
    width: 100%;
  }
  .goal__container {
    display: flex;

    justify-content: space-around;
  }
  .reward__container {
    display: flex;
  }
`;
