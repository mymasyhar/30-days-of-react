import React from 'react';
import ReactDOM from 'react-dom/client';

const headerStyles = {
  fontFamily: 'Montserrat',
  padding: 10,
  textAlign: 'center',
}
const Header = () => {
  return (
    <header style={headerStyles}>
      <h2>{'subscribe'.toUpperCase()}</h2>
      <p>Sign up with your email address to receive news and updates.</p>
    </header>
  )
}

const formStyles = {
  padding: 20,
  textAlign: 'center',
}

const inputContainerStyles = {
  padding: 10,
  display: 'flex',
  justifyContent: 'center',
  gap: 20,
  margin: 15,
}
const inputStyles = {
  fontFamily: 'Montserrat',
  padding: 20,
  width: 250,
  border: 'none',
  borderRadius: 5,
}

const buttonStyles = {
  padding: 15,
  width: 400,
  border: 'none',
  borderRadius: 5,
  background: '#E76161',
  color: '#fff',
  fontSize: 18
}

const SubscriptionForm = () => {
  const formElements = ['first name', 'last name', 'email'];
  return (
    <form style={formStyles}>
      <div style={inputContainerStyles}>
        {formElements.map(input => (<input key={input} style={inputStyles} placeholder={input} />))}
      </div>
      <button style={buttonStyles}>Subscribe</button>
    </form>
  )
}

const appStyles = {
  background: '#B0DAFF',
  padding: 20,
  borderRadius: 10,
  margin: 30,
}

const App = () => {
  return (
    <main style={appStyles}>
      <Header />
      <SubscriptionForm />
    </main>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
