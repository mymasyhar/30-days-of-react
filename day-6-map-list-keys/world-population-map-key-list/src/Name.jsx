const nameStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}
export default function Name(props) {
  return (
    <div style={nameStyles}>
      {props.data.map(cn => (<div key={cn.country}>{cn.country}</div>))}
    </div>
  )
};
