import React, { useState, useEffect } from 'react';
import Default from '../../../components/templates/Default';

import { Form, FormGroup, FormHeader } from './styles';
import { Button } from '../../../components/Button';
import FormField from '../../../components/FormField';

import dataList from '../../../data/dados_iniciais.json';

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
    const url = `http://localhost:8080/categorias`;
    fetch(url).then(async (responseServer) => {
      const resposeJson = await responseServer.json();
      setCategoriasList([...categoriasList, ...resposeJson]);
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

        <FormGroup>
          <FormHeader>Lista de Categorias</FormHeader>
          <ul>
            {categoriasList.map((value) => (
              <li key={value.titulo}>{value.titulo}</li>
            ))}
          </ul>
        </FormGroup>
      </Form>
    </Default>
  );
}

export default Categoria;
