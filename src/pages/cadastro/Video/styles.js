import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Form = styled.form``;

export const FormGroup = styled.fieldset`
  border-color: var(--primary);
  margin-bottom: 30px;
  position: relative;
`;
export const FormHeader = styled.legend`
  /* font-family: Ubuntu; */
  /* text-transform: uppercase; */
  font-size: 30px;
  font-weight: bold;
  color: var(--blackLighter);
`;

export const ButtonGroup = styled.div`
  flex: 1;
  float: right;
  
  .ButtonForm {
    background: var(--blackLighter);
    color: var(--black);
    border-color: var(--blackLighter);
  }
  .ButtonSubmit {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);
  }

  .ButtonForm + .ButtonForm {
    margin-left: 10px;
  }


`;