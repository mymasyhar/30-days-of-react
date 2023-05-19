const populationStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}
export default function Population(props) {
  return(
    <div style={populationStyles}>
      {props.data.map(cn => (<div key={cn.population}>{cn.population}</div>))}
    </div>
  )
};
