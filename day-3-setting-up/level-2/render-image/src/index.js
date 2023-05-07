import React from 'react';
import ReactDOM from 'react-dom';
import images from './images/images';

const headerStyles = {
  textAlign: 'center',
  fontSize: 24,
  fontFamily: 'Montserrat'
}
//header jsx element
const header = (
  <header style={headerStyles}>
    <h2>Front End Technologies</h2>
  </header>
)

const mainStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: `3%`
}
//main jsx element
const main = (
  <main style={mainStyles}>
    {images.data.map(img => (<img key={img.id} width={200} height={200} src={img.source} alt={img.alt}/>))} 
  </main>
)

const app = (
  <div>
    {header}
    {main}
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement)