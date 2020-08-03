import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import { create } from '../../../services/videos';
import { getAll } from '../../../services/categorias';

import { Form, FormGroup, FormHeader, ButtonGroup } from './styles';

import Default from '../../../components/templates/Default';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';

function Video() {
  const initValues = {
    categoria: '',
    categoriaId: '',
    titulo: '',
    url: '',
  };
  const [categorias, setCategorias] = useState([]);
  const categoriasTitulo = categorias.map(({ titulo }) => titulo);
  const { clearForm, modelValues, onChange } = useForm(initValues);
  const history = useHistory();

  useEffect(() => {
    getAll()
      .then((response) => {
        setCategorias([...response]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Default>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const categoriaSelected = categorias.find(
            (categoria) => categoria.titulo === modelValues.categoria
          );
          console.log(categoriaSelected);
          if (categoriaSelected) {
            const {url, titulo} = modelValues;
            create({
              categoriaId: categoriaSelected.id,
              titulo: titulo,
              url: url,
            }).then(() => {
              clearForm();
              history.push('/');
            });
          }
        }}
      >
        <FormGroup>
          <FormHeader>Cadastro de Vídeo</FormHeader>
          <FormField
            type="text"
            label="Título"
            name="titulo"
            id="titulo"
            value={modelValues.titulo}
            onChange={onChange}
          />
          <FormField
            type="text"
            label="URL"
            name="url"
            id="url"
            value={modelValues.url}
            onChange={onChange}
          />
          <FormField
            type="select"
            label="Categoria"
            id="categoria"
            name="categoria"
            value={modelValues.categoria}
            suggestions={categoriasTitulo}
            onChange={onChange}
          />
          <ButtonGroup>
            <Button as={Link} to="/cadastro/categoria" className="ButtonForm">
              Nova Categoria
            </Button>
            <Button type="submit" className="ButtonForm ButtonSubmit">
              Cadastrar
            </Button>
          </ButtonGroup>
        </FormGroup>
      </Form>
    </Default>
  );
}

export default Video;
