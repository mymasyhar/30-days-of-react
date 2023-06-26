import Header from "./components/Header"
import nicoImage from './assets/nicorobin.png'
import {Button} from "./components/Button";
import { useState } from "react";
import { Avatar } from "./components/Avatar";

function App() {
  const [light, setLight] = useState(true);

  function handleLight(){
    setLight(light => !light)
  }

  const headerTheme = {
    fontFamily: 'Montserrat',
    color: light ? '#fff' : '#eee',
    background: light ? '#FFE4A7' : '#001C30'
  }

  const imageTheme = {
      width: 250,
      height: 250,
      backgroundSize: 'cover',
      backgroundColor: light ? '#64CCC5' : '#176B87',
      borderRadius: '50%',
  }
  const data = {
    name: 'Masyhar',
    title: 'Software Engineer',
    origin: {
      country: 'Indonesia',
      city: 'Kendari'
    },
  }
  const buttonTheme = {
    fontFamily: 'Montserrat',
    fontSize: 18,
    padding: 10,
    border: 'none',
    background : light ? '#64CCC5' : '#1B6B93',
    color: light ? '#001C30' : '#FFFAD7'
  }
  
  const appTheme = {
    height: '100vh',
    padding: 20,
    fontFamily: 'Montserrat',
    display: 'flex',
    gap: 20,
    flexDirection: 'column',
    background: light ? '#98EECC' : '#2D4356',
    color: light ? '#001C30' : '#FFFAD7'
  }
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }

  return (
    <section style={appTheme}>
      <div style={divStyle}>
        <Avatar theme={imageTheme} src={nicoImage}/>
        <Header data={data} />
      </div>
      <Button styles={buttonTheme} onClick={handleLight} text={light ? 'change to dark mode' : 'change to light mode'} />
    </section>
  )
}

export default App
