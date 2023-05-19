const barStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}
export default function Bar(props) {
  return(
    <div style={barStyles}>
      {props.data.map(cn => (<div key={cn.country.toUpperCase()} style={{width: cn.population/20000000, height: 20, background: '#FED421'}}></div>))}
    </div>
  )
};
