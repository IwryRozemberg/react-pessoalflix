import styled, { css } from 'styled-components';

export const Form = styled.form``;

export const FormGroup = styled.fieldset`
  border-color: var(--primary);
  margin-bottom: 30px;

  .ButtonSubmit {
    border-color: inherit;
    background: var(--primary);
    float: right;
  }
`;
export const FormHeader = styled.legend`
  /* font-family: Ubuntu; */
  /* text-transform: uppercase; */
  font-size: 30px;
  font-weight: bold;
  color: var(--blackLighter);
`;

export const Table = styled.table`
  margin: 30px auto;
  width: 100%;
  border: none;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;

  .ActionsColumn {
    display: flex;
  }

  .Actions {
    padding: 5px;
    border: none;
    flex: 1;
  }

  .Actions + button {
    margin-left: 5px;
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

Table.Header = styled.thead``;
Table.Body = styled.tbody``;
Table.Row = styled.tr``;
Table.Column = styled.td`
  padding: 5px 0;

`;

Table.HeaderColumn = styled.th`
  padding: 15px 0;
  border-bottom: 4px solid var(--primary);
  font-size: 20px;
`;
