import React from 'react';
import ReactDOM from 'react-dom/client';

const subscriptions = {
  title: 'subscription',
  info: 'Sign up with your email address to receive news and updates.',
  inputPlaceholder: ['First name', 'Last name', 'Email'],
  buttonPlaceholder: 'subscribe'
}

const mainStyles = {
  textAlign: 'center',
  fontFamily: 'Montserrat',
  background: '#B0DAFF',
  padding: `30px 30px 50px 30px`,
  margin: `40px`,
  borderRadius: 15
}

const inputFormStyles = {
  padding: 15,
  width: 200,
  border: 'none',
  borderRadius: 5,
  fontFamily: 'Montserrat'

}

const formContainerStyle = {
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
  margin: `25px 20px`
}

const subsButtonStyles = {
  padding: 15,
  width: 400,
  fontSize: 18,
  background: '#E06469',
  border: 'none',
  borderRadius: 8,
  color: '#fff'
}

const subsForm = (
  <main style={mainStyles}>
    <h1>{subscriptions.title.toLocaleUpperCase()}</h1>
    <p>{subscriptions.info}</p>
    <div style={formContainerStyle}>
      {subscriptions.inputPlaceholder.map(ph => (<input key={ph} placeholder={ph} style={inputFormStyles} />))}
    </div>
    <button style={subsButtonStyles}>{subscriptions.buttonPlaceholder}</button>
  </main>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {subsForm}
  </div>
);
