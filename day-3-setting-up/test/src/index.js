import React from 'react'
import ReactDOM from 'react-dom'
import archImages from './assets/images/arch.jpg'

//styling for header
const headerStyles = {
  backgroundColor: '#6DF1EB',
  fontFamily: 'Montserrat',
  padding: 25,
  lineHeight: 1.5
}

const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days of React</h1>
      <h2>Getting Started</h2>
      <h3>JavaScript Library</h3>
      <p>Masyhar M.</p>
      <small>May, 5th 2023</small>
    </div>
  </header>
)
//main styling
const mainStyles = {
  backgroundColor: '#D3F2A0',
  padding: 10
}
const main = (
  <main style={mainStyles}>
    <p>prerequisite ro dive in react:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <img src={archImages} width={300} height={500} alt='archimage'></img>
  </main>
)

//footer syles
const footerSyles = {
  backgroundColor: '#2EC093',
  padding: 5
}
const footer = (
  <footer style={footerSyles}>
    <p>Copyright, &copy; 2023 </p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>

)
const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);