import React, { useState, useEffect } from 'react';

import useForm from '../../../hooks/useForm';
import {
  getAll,
  create,
  getById,
  update,
  deleteById,
} from '../../../services/categorias';

import { Form, FormGroup, FormHeader, Table, ButtonGroup } from './styles';

import Default from '../../../components/templates/Default';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';
import { Link } from 'react-router-dom';

function Categorias() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const valuesInit = {
    id: '',
    titulo: '',
    descricao: '',
    cor: '#' + randomColor,
  };
  const [categorias, setCategorias] = useState([]);
  const { modelValues, clearForm, onChange, setModelValues } = useForm(
    valuesInit
  );

  function atualizaCategorias() {
    getAll().then((response) => setCategorias([...response]));
  }

  function editar(event, id) {
    event.preventDefault();
    console.log(event, 'ID_EVENT:', id);
    getById(id).then((response) => {
      setModelValues(response);
    });
  }

  function remover(event, id) {
    event.preventDefault();
    deleteById(id).then(() => {
      atualizaCategorias();
    });
  }

  useEffect(() => {
    atualizaCategorias();
  }, []);

  return (
    <Default>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(
            'Iniciando: ',
            modelValues.id,
            'Comparação:',
            modelValues.id > 0
          );
          if (modelValues.id > 0) {
            console.log('Editando: ', modelValues.id);
            update(modelValues).then(() => {
              atualizaCategorias();
              clearForm();
            });
          } else {
            console.log('Cadastrando: ', modelValues.id);
            create(modelValues).then(() => {
              atualizaCategorias();
              clearForm();
            });
          }
        }}
      >
        <FormGroup>
          <FormHeader>Cadastro de Categoria</FormHeader>
          <input
            hidden
            id="id"
            name="id"
            value={modelValues.id}
            onChange={onChange}
          />
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
          <ButtonGroup>
            <Button
              as={Link}
              to="/cadastro/categoria"
              className="ButtonForm"
              onClick={clearForm}
            >
              Limpar
            </Button>
            <Button type="submit" className="ButtonForm ButtonSubmit">
              Cadastrar
            </Button>
          </ButtonGroup>
        </FormGroup>
      </Form>
      <Form>
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
              <Table.Row key={value.id}>
                <Table.Column>{value.titulo}</Table.Column>
                <Table.Column>{value.descricao}</Table.Column>
                <Table.Column
                  style={{ background: value.cor, color: '#000000' }}
                >
                  {value.cor}
                </Table.Column>
                <Table.Column className="ActionsColumn">
                  <Button
                    className="Actions"
                    onClickCapture={(event) => {
                      editar(event, value.id);
                    }}
                  >
                    Editar
                  </Button>
                  <Button className="Actions" onClickCapture={(event) => remover(event, value.id)}>
                    Remover
                  </Button>
                </Table.Column>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Form>
    </Default>
  );
}

export default Categorias;
