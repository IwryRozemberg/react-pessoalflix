import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 16px 32px;
  color: var(--white);
  text-align: center;
  font-weight: 300;

  .DestakText{
    color: var(--primary);
  font-weight: bold;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
