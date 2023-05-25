import Header from "./Header"
import Number from "./Number"

const appStyles = {
  fontFamily: 'Montserrat',
}
const App = () => {
  return(
    <section style={appStyles}>
      <Header title={'number generator'.toUpperCase()} subtitle={'30Days of React Challenge'} />
      <Number numbers={40} />
    </section>
  )
}
export default App
