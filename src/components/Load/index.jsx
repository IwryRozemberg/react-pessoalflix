import React from 'react';

import { Container, Dot, DotsBox } from './styles';

function Load({ numberDots }) {
  let delaySum = 0;
  const myArray = Array(numberDots)
    .fill(0)
    .map((delay) => {
      delaySum += 0.2;
      console.log('Mapeando: ', delaySum);
      delay = delaySum;
      return delay;
    });

  return (
    <Container>
      <DotsBox>
        {myArray.map((delay, index) => (
          <>
            <Dot key={`dot_${index}`} delay={delay}>
              .
            </Dot>
          </>
        ))}
      </DotsBox>
    </Container>
  );
}

export default Load;
