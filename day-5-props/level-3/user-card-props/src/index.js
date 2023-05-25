import React from 'react';
import ReactDOM from 'react-dom/client';

import User from './images/User';

const imgStyles = {
  width: 250,
  height: 250,
  backgroundSize: 'cover',
  backgroundColor: '#AFD3E2',
  borderRadius: '50%'
}

const Header = ({data}) => {
  return (
    <header>
      <img style={imgStyles} src={data.source}  />
      <h1>{data.name}</h1>
      <p>{data.title}, <span>{data.location}</span></p>
    </header>
  )
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

const Skills = (props) => {
  return (
    <div>
      <h2>skills</h2>
      <div style={skillsContainerStyles}>
        {props.skills.map(skill => (<p style={skillsStyles} key={skill}>{skill}</p>))}
      </div>
    </div>
  )
}

const appStyles = {
  fontFamily: 'Montserrat',
  padding: 20
}
const App = () => {
  const data = {
    name: `${User.firstName + ' ' + User.lastName}`,
    source: User.image,
    title: User.title,
    location: User.location,
  }
  return (
    <section style={appStyles}>
      <Header data={data} />
      <Skills skills={User.skills.map(skill => skill.skill)} />
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
