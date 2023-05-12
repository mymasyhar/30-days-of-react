import React from 'react';
import ReactDOM from 'react-dom/client';
//import component
import Header from './Header';
import Image from './Images';

//import data
import images from './images/images';

const App = () => {
  return (
    <>
      <Header title={'Front End Technologies'} />
      <Image src={images.map(im => im.source)} alt={images.map(im => im.alt)} key={images.map(im => im.key)} width={200} height={200} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
