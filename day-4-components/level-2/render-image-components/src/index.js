import React from 'react';
import ReactDOM from 'react-dom/client';
import images from './images/images';

const headerStyles = {
  fontFamily: 'Montserrat',
  fontSize: 28,
  padding: 10,
  display: 'flex',
  justifyContent: 'center'
}

const Header = () => {
  return (
    <header style={headerStyles}>
      <h2>Front end technologies</h2>
    </header>
  )
}

const Image = () => {
  return (
    images.data.map(image => (<img src={image.source} alt={image.alt} key={image.id} height={200} width={200} />))
  )
}

const imageContainerSyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: 20,
  padding: 10,

}
const ImageContainer = () => {
  return (
    <main style={imageContainerSyles}>
      <Image />
    </main>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <ImageContainer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);