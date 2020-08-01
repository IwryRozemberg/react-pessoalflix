import styled, { css } from 'styled-components';

export const Field = styled.p`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 56px;
  }
`;
export const Label = styled.label``;

Label.Text = styled.span`
  background: transparent;
  color: var(--grayLight);
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.25s ease-in-out;
`;

export const Input = styled.input`
  background: var(--blackLighter);
  color: var(--grayLight);
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid var(--blackLighter);
  border-bottom: 4px solid var(--blackLighter);
 /* #53585d */
  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;

  &:-webkit-autofill {
    border-top: 4px solid var(--blackLighter);
    -webkit-text-fill-color: var(--grayLight);
    box-shadow: 0 0 0px 1000px var(--blackLighter) inset;
    -webkit-box-shadow: 0 0 0px 1000px var(--blackLighter) inset;
    /* transition: background-color 5000s ease-in-out 0s; */
  }
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(0.7) translateY(-15px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(0.7) translateY(-15px);
        }
      `
    );
  }}
`;
