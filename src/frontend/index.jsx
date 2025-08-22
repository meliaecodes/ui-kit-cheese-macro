import React, { useEffect, useState } from 'react';
import ForgeReconciler, { useConfig, Image } from '@forge/react';
import brie from '../../images/Brie.png';
import cheddar from '../../images/Cheddar.png';
import gouda from '../../images/Gouda.png';
import parmesan from '../../images/Parmesan.png';
import quesoFresco from '../../images/QuesoFresco.png';
import stilton from '../../images/Stilton.png';

const Cheese = (cheese) => {
  /* The Cheese component will display an image of cheese with a width of 150px based on the type of cheese selected */
  if (cheese.type === 'brie') {
    return <Image src={brie} alt="Brie" width="150px" />;
  }
  if (cheese.type === 'cheddar') {
    return <Image src={cheddar} alt="Cheddar" width="150px" />;
  }
  if (cheese.type === 'gouda') {
    return <Image src={gouda} alt="Gouda" width="150px"/>;
  }
  if (cheese.type === 'parmesan') {
    return <Image src={parmesan} alt="Parmesan" width="150px" />;
  }
  if (cheese.type === 'quesoFresco') {
    return <Image src={quesoFresco} alt="Queso Fresco" width="150px" />;
  }
  if (cheese.type === 'stilton') {
    return <Image src={stilton} alt="Stilton" width="150px"/>;
  }
  return <Image src={cheddar} alt="Cheddar" width="150px" />
}

const App = () => {
  const config = useConfig();

  return (
    <>
      {config && <Cheese type={config.cheese} />}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
