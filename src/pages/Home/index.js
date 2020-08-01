import React from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Default from '../../components/templates/Default';

// import dataList from '../../data/dados_iniciais.json';

function Home() {
  return (
    <Default>
      {/* <BannerMain
        videoTitle={dataList.categorias[0].videos[0].titulo}
        url={dataList.categorias[0].videos[0].url}
        videoDescription="Conheça a história mitológica do Deus dos mares"
      />
      {dataList.categorias.map((categoria, index) => (
        <Carousel
          key={categoria.titulo}
          ignoreFirstVideo={index === 0}
          category={categoria}
        />
      ))} */}
    </Default>
  );
}

export default Home;
