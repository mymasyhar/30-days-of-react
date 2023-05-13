import React from 'react';
import ReactDOM from 'react-dom/client';

const headerStyles = {
  fontFamily: 'Montserrat',
  textAlign: 'center',
}
const Header = (props) => {
  return (
    <header style={headerStyles}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  )
}

const inputStyles = {
  width: 300,
  padding: 10,
  border: 'none',
  borderRadius: 5
}
const Input = (props) => <input style={inputStyles} placeholder={props.name} />

const formInputStyles = {
  display: 'flex',
  gap: 10,
  justifyContent: 'center',
  margin: 25,
}

const buttonStyles = {
  padding: 15,
  width: 300,
  border: 'none',
  borderRadius: 5,
  background: '#E76161',
  color: '#fff'
}
const Button = (props) => <button style={buttonStyles}>{props.title}</button>

const formStyles = {
  textAlign: 'center',
  margin: '30px 0'
}
const FormInput = (props) => {
  const data = props.data;
  return (
    <form style={formStyles}>
      <div style={formInputStyles}>
        {data.map(inp => (<Input name={inp} key={inp} />))}
      </div>
      {/* <button>{props.button}</button> */}
      <Button title={'subscribe'} /> 
    </form>
  )
}

const appStyles = {
  background: '#AFD3E2',
  margin: '10px 30px',
  padding: 20,
  borderRadius: 10,
  color: '#fff'
}

const App = () => {
  return (
    <div style={appStyles}>
      <Header title={'subscription'.toUpperCase()} description='Sign up with your email to receive news and updates' />
      <FormInput data={['First name', 'Last name', 'Email', 'Address']} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
