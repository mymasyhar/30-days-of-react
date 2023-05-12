const headerSyles = {
  fontFamily: 'Montserrat',
  padding: 15,
  display: 'flex',
  justifyContent: 'center'
}
const Header = (props) => {
  return(
    <header style={headerSyles}>
      <h1>{props.title}</h1>
    </header>
  )
}
export default Header;