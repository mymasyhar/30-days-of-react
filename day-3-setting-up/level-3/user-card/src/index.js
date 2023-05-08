import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user/user';

import {MdVerified} from 'react-icons/md'

const headerStyles = {
  fontFamily: 'Montserrat',
  padding: 30
}

const imgStyles = {
  width: 250,
  height:250,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '50%',
  backgroundColor: '#309FD2'
}

const infoStyles = {
  display: 'flex',
  alignItems: 'start',
  gap: 5,
  fontSize: 24,
  fontWeight: 'bold'
}

const cardHeader = (
  <header style={headerStyles}>
    <img style={imgStyles} src={user.image} alt='user' />
    <h5 style={infoStyles}>{user.firstName} {user.lastName} <span><MdVerified style={{color: 'green'}} /></span></h5>
    <p>{user.title}, {user.location}</p>
  </header>
);

const mainStyles = {
  fontFamily: 'Montserrat',
  padding: 30,
}

const skillStyles = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
};

const itemStyles = {
  background: '#19A7CE', 
  padding: 10, 
  color: '#fff', 
  borderRadius: 5, 
  width: 'max-content', 
  margin: 0
}

const cardSkills = (
  <main style={mainStyles}>
    <h2>Skills</h2>
    <div style={skillStyles}>
      {
        user.skills.map(skill => (<p style={itemStyles} key={skill.key}>{skill.skill}</p>))
      }
    </div>
  </main>
)

const card = (
  <>
    {cardHeader}
    {cardSkills}
  </>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(card);
