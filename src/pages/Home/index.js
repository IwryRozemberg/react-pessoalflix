import React, { useEffect, useState } from 'react';

import { getAllWithVideos } from '../../services/categorias';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Default from '../../components/templates/Default';
function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setCategorias([...categoriasComVideos]);
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(categorias);
  }, []);

  return (
    <Default>
      {categorias.length >= 1 && (
        <>
          <BannerMain
            videoTitle={categorias[0].videos[0].titulo}
            url={categorias[0].videos[0].url}
            videoDescription="Conheça a história mitológica do Deus dos mares"
          />
          {categorias.map((categoria, index) => (
            <Carousel
              key={categoria.titulo}
              ignoreFirstVideo={index === 0}
              category={categoria}
            />
          ))}
        </>
      )}
    </Default>
  );
}

export default Home;
