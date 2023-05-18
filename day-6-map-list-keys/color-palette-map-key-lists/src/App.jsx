import Header from "../../number-generator/src/Header"
import Palette from "./Palette"

const appStyles = {
  fontFamily: 'Montserrat'
}

function App() {

  return (
    <main style={appStyles}>
      <Header title={'color palette'.toUpperCase()} subtitle={'30 Days of React'} />
      <Palette number={30}/>
    </main>
  )
}

export default App
