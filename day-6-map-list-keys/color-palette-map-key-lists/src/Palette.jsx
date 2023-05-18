function generatePalette(num) {
  const colors = [];
  const chars = "ABCDEF1234567890";
  for (let i = 0; i < num; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    colors.push(color);
  }
  return colors;
}

const paletteStyles = {
  fontWeight: 'bold',
  margin: '0 10%',
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  flexWrap: 'wrap',
  color: '#fff',
}

export default function Palette(props) {
  const colors = generatePalette(props.number);
  return (
    <main style={paletteStyles}>
      {colors.map((color) => (
        <div style={{flex: '1 1 0px',textAlign: 'center', background: color, padding: 50 }} key={color}>
          {color}
        </div>
      ))}
    </main>
  );
}
