import React from 'react';

import { Container, Ops, Content } from './styles';

import Default from '../../components/templates/Default';

function NotFount() {
  return (
    <Default>
      <Container>
        <Ops>
          <h1>Ops!</h1>
        </Ops>
        <Content>A página que você está procurando não foi encontrada.</Content>
      </Container>
    </Default>
  );
}

export default NotFount;
