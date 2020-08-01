import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Ops = styled.div`
  font-size: 100px;
  padding: 0 20px;
  font-weight: bold;

  h1 {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 500px;
  font-size: 50px;
  padding: 0 20px;
  line-height: 1.2;

  @media (max-width: 900px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;
