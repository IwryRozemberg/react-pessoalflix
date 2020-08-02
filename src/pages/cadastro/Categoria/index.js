import React, { useState, useEffect } from 'react';

import useForm from '../../../hooks/useForm';
import { getAll } from '../../../services/categorias';

import { Form, FormGroup, FormHeader, Table } from './styles';

import Default from '../../../components/templates/Default';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';

function Categorias() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const valuesInit = {
    titulo: '',
    descricao: '',
    cor: '#' + randomColor,
  };
  const [categorias, setCategorias] = useState([]);
  const { modelValues, clearForm, onChange } = useForm(valuesInit);

  useEffect(() => {
    getAll()
      .then((response) => setCategorias([...response]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Default>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, modelValues]);
          clearForm();
        }}
      >
        <FormGroup>
          <FormHeader>Cadastro de Categorias</FormHeader>
          <FormField
            label="Título"
            type="text"
            name="titulo"
            value={modelValues.titulo}
            onChange={onChange}
          />
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={modelValues.descricao}
            onChange={onChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={modelValues.cor}
            onChange={onChange}
          />
          <Button className="ButtonSubmit">Cadastrar</Button>
        </FormGroup>
      </Form>
      {/* <Form>
        <FormGroup>
          <FormHeader>Lista de valuess</FormHeader> */}
      <Table cellspacing="0" cellpadding="0">
        <Table.Header>
          <Table.Row>
            <Table.HeaderColumn>Título</Table.HeaderColumn>
            <Table.HeaderColumn>Descrição</Table.HeaderColumn>
            <Table.HeaderColumn>Cor</Table.HeaderColumn>
            <Table.HeaderColumn>Ações</Table.HeaderColumn>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {categorias.map((value) => (
            <Table.Row key={value.titulo}>
              <Table.Column>{value.titulo}</Table.Column>
              <Table.Column>{value.descricao}</Table.Column>
              <Table.Column style={{ background: value.cor, color: '#000000' }}>
                {value.cor}
              </Table.Column>
              <Table.Column className="ActionsColumn">
                <Button className="Actions">Editar</Button>
                <Button className="Actions">Remover</Button>
              </Table.Column>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* </FormGroup>
      </Form> */}
    </Default>
  );
}

export default Categorias;
