import { API_URL } from '../config';

const url = `${API_URL}/categorias`;

export function getAllWithVideos() {
  return fetch(`${url}/?_embed=videos`).then(async (responseServer) => {
    if (responseServer.ok) {
      const resposeJson = await responseServer.json();
      return resposeJson;
    } else {
      throw new Error('Falha ao buscar as categorias.');
    }
  });
}

export function getAll() {
  return fetch(`${url}`).then(async (responseServer) => {
    if (responseServer.ok) {
      const resposeJson = await responseServer.json();
      return resposeJson;
    } else {
      throw new Error('Falha ao buscar as categorias.');
    }
  });
}

export function getById(id) {
  return fetch(`${url}/${id}`).then(async (responseServer) => {
    if (responseServer.ok) {
      const resposeJson = await responseServer.json();
      return resposeJson;
    } else {
      throw new Error('Falha ao buscar as categoria.');
    }
  });
}

export function create(data) {
  return fetch(`${url}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      return;
    }
    throw new Error('Falha ao cadastrar uma categoria.');
  });
}

export function update(data) {
  return fetch(`${url}/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      return;
    }
    throw new Error('Falha ao atualizar uma categoria.');
  });
}

export function deleteById(id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      return;
    }
    throw new Error('Falha ao apagar uma categoria.');
  });
}
