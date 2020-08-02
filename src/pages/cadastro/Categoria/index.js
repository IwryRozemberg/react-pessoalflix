import React, { useState, useEffect } from 'react';
import Default from '../../../components/templates/Default';

import { Form, FormGroup, FormHeader, Table } from './styles';
import { Button } from '../../../components/Button';
import FormField from '../../../components/FormField';

function Categoria() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const categoriaType = {
    titulo: '',
    descricao: '',
    cor: '#' + randomColor,
  };
  const [categoriasList, setCategoriasList] = useState([]);
  const [categoria, setCategoria] = useState(categoriaType);

  useEffect(() => {
    const url = process.env.PUBLIC_URL || `http://localhost:8080`;
    fetch(`${url}/categorias`).then(async (responseServer) => {
      const resposeJson = await responseServer.json();
      if (responseServer.ok) setCategoriasList([...resposeJson]);
    });
  }, []);

  function setValues(event) {
    const {
      currentTarget: { name, value },
    } = event;
    setCategoria({ ...categoria, [name]: value });
  }

  return (
    <Default>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setCategoriasList([...categoriasList, categoria]);
          setCategoria(categoriaType);
        }}
      >
        <FormGroup>
          <FormHeader>Cadastro de Categoria</FormHeader>
          <FormField
            label="Título"
            type="text"
            name="titulo"
            value={categoria.titulo}
            onChange={setValues}
          />
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={categoria.descricao}
            onChange={setValues}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={categoria.cor}
            onChange={setValues}
          />
          <Button className="ButtonSubmit">Cadastrar</Button>
        </FormGroup>
      </Form>
      {/* <Form>
        <FormGroup>
          <FormHeader>Lista de Categorias</FormHeader> */}
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
              {categoriasList.map((value) => (
                <Table.Row key={value.titulo}>
                  <Table.Column>{value.titulo}</Table.Column>
                  <Table.Column>{value.descricao}</Table.Column>
                  <Table.Column
                    style={{ background: value.cor, color: '#000000' }}
                  >
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

export default Categoria;
