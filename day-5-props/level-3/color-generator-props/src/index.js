import React from 'react';
import ReactDOM from 'react-dom/client';

function generateColor(num){
  const colors = [];
  const chars = 'ABCDEF1234567890';
  for(let i=0; i<num; i++){
    let color = `#`;
    for(let i=0; i<6; i++){
      color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    colors.push(color);
  }
  return colors;
}

const paletteContainerStyle = {
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  color: '#fff',
}
const Palette = (props) => {
  const colors = generateColor(props.num);
  return (
    <div style={paletteContainerStyle}>
      {colors.map(color => (<div style={{background: color, display: 'flex', justifyContent:'center', alignItems:'center', height: props.height}} key={color}>{color}</div>))}
    </div>
  )
}
const App = () => {
  return (
    <>
      <Palette num={10} height={100} />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
