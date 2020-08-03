import { API_URL } from '../config';

const url = `${API_URL}/videos`;

export function getAll() {
  return fetch(`${url}`).then(async (responseServer) => {
    if (responseServer.ok) {
      const resposeJson = await responseServer.json();
      return resposeJson;
    }
    throw new Error('Falha ao buscar as vídeos.');
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
    throw new Error('Falha ao cadastrar um vídeo.');
  });
}
