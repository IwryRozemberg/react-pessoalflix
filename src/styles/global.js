import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --primary: #2a7ae4;
    --black: #000000;
    --blackLighter: #9e9e9e;
    --grayLight: #f5f5f5;
    --grayMedium: #e5e5e5;
    --white: #ffffff;
    --frontEnd: #6bd1ff;
    --backEnd: #00c86f;
}

* {
    box-sizing: border-box;

}

*,
input,
button {
    font-family: 'Roboto', sans-serif;
    color: var(---white);
    background-color: var(--black);
}

html,
body {
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
  list-style: none;
}

#root {
    /* min-height: calc(100vh - var(--bodyPaddingTop)); */
    padding-top: var(--bodyPaddingTop);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
`;