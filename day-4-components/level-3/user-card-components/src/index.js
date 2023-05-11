import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './images/User'
import {MdVerified} from 'react-icons/md'

const cardHeaderStyles = {
  fontFamily: 'Montserrat',
  padding: 25,
}
const imgContainer = {
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  width: 'max-content',
  textAlign: 'center'
}

const imgStyles = {
  width: 250,
  height: 250,
  backgroundSize: 'cover',
  backgroundColor: '#AFD3E2',
  borderRadius: '50%'
}
const iconStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: 5,
  alignItems: 'center',
  fontSize: 20,
  fontWeight: 500,
  margin: '10px 0'
}
const CardHeader = () => {
  return (
    <header style={cardHeaderStyles}>
      <div style={imgContainer}>
        <img style={imgStyles} src={User.image} alt='profile-pict' />
        <h6 style={iconStyles}>{User.firstName} {User.lastName} <MdVerified style={{color: 'green'}}/></h6>
      </div>
      <p>{User.title}, {User.location}</p>
    </header>
  )
}

const cardBodyStyles = {
  fontFamily: 'Montserrat',
  padding: 20
}

const skillsContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

const skillsStyles = {
  padding: 10,
  margin: 0,
  width: 'max-content',
  background: '#19A7CE',
  borderRadius: 5,
  color: '#fff',
  fontWeight: 400,
}

const CardBody = () => {
  return (
    <main style={cardBodyStyles}>
      <h3>Skills</h3>
      <div style={skillsContainerStyles}>
        {User.skills.map(user => (<p style={skillsStyles} key={user.key}>{user.skill}</p>))}
      </div>
    </main>
  )
}

const cardStyles = {
  padding: 20,
  margin: 40,
  background: '#DBDFEA',
  borderRadius: 10
}
const Card = () => {
  return (
    <section style={cardStyles}>
      <CardHeader />
      <CardBody />
    </section>
  )
}


const App = () => {
  return (
    <>
      <Card />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);