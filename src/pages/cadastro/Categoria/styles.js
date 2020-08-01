import styled from 'styled-components';

export const Form = styled.form``;

export const FormGroup = styled.fieldset`
  border-color: var(--primary);
  & + fieldset {
    margin: 30px 0;
  }

  .ButtonSubmit {
    border-color: var(--primary);
    float: right;
  }
`;
export const FormHeader = styled.legend`
  font-size: 30px;
  font-weight: bold;
  color: var(--blackLighter);
`;