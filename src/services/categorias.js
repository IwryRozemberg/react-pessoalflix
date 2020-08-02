import { API_URL } from '../config';

const urlCategorias = `${API_URL}/categorias`;

export function getAllWithVideos() {
  return fetch(`${urlCategorias}/?_embed=videos`).then(
    async (responseServer) => {
      if (responseServer.ok) {
        const resposeJson = await responseServer.json();
        return resposeJson;
      } else {
        throw new Error('Falha ao buscar as categorias.');
      }
    }
  );
}

export function getAll() {
  return fetch(`${urlCategorias}`).then(async (responseServer) => {
    if (responseServer.ok) {
      const resposeJson = await responseServer.json();
      return resposeJson;
    } else {
      throw new Error('Falha ao buscar as categorias.');
    }
  });
}
