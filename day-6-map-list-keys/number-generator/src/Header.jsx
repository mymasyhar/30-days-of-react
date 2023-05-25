const headerStyles = {
  padding: 30,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,

}
export default function Header(props) {
  return (
    <header style={headerStyles}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </header>
  )
};
