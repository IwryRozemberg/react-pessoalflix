import React, { useEffect, useState } from 'react';

import { getAllWithVideos } from '../../services/categorias';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Default from '../../components/templates/Default';
import Load from '../../components/Load';
function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getAllWithVideos().then((categoriasComVideos) => {
      setCategorias([...categoriasComVideos]);
    });
  }, []);

  return (
    <Default>
      {categorias.length ===0 && <Load numberDots={5} />}
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
