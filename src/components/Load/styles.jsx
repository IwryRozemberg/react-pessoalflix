import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 500;
  background-color: var(--black);
  top: var(--bodyPaddingTop);
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--bodyPaddingTop));
`;

export const Dot = styled.span`
  display: flex;
  background-color: var(--primary);
  color: var(--primary);
  height: 30px;
  width: 30px;
  margin: auto;
  border-radius: 50%;
  display: inline-block;
  animation: blink 1.4s steps(5, end) infinite;
  animation-delay: ${(props) => props.delay + 's'};

  & + span {
    margin-left: 5px;
  }

  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

export const DotsBox = styled.div``;
