import React from 'react';

import { Container } from './styles';
import GlobalStyle from '../../../styles/global';

import Menu from '../../Menu';
import Footer from '../../Footer';

function Default({ children }) {
  return (
    <>
      <Menu />
      <Container>{children}</Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default Default;
