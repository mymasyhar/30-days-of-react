import {tenHighestPopulation} from './data/data'

import Name from "./Name"
import Bar from './Bar'
import Population from './Population'

const appStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
}
function App() {
  return (
    <main style={appStyles}>
      <Name data={tenHighestPopulation} />
      <Bar data={tenHighestPopulation} />
      <Population data={tenHighestPopulation} />
    </main>
  )
}

export default App
