import React, { Component } from "react"
import userImage from './assets/nicorobin.png';

const imgStyles = {
  width: 250,
  height: 250,
  backgroundSize: 'cover',
  backgroundColor: '#AFD3E2',
  borderRadius: '50%'
}

class Profile extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const {firstName, lastName, title, location, userImage} = this.props.user;
    return(
      <header style={mainStyles}>
        <img src={userImage} alt={firstName} style={imgStyles} />
        <h1>{firstName} {lastName}</h1>
        <p>{title}, {location}</p>
      </header>
    )
  }
}

const mainStyles = {
  padding: 20,
}
const skillsContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}

const skillsElementStyles = {
  padding: 10,
  margin: 0,
  width: 'max-content',
  background: '#19A7CE',
  borderRadius: 5,
  color: '#fff',
  fontWeight: 400,
}

class Skills extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { skills } = this.props
    return(
      <main style={mainStyles}>
        <h2>Skills</h2>
        <div style={skillsContainerStyles}>
          {skills.map(skill => (<p key={skill} style={skillsElementStyles}>{skill}</p>))}
        </div>
      </main>
    )
  }
}

const buttonStyles = {
  fontFamily: 'Montserrat',
  background: '#19A7CE',
  color: '#fff',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer'
}
const Button = (props) => {
  return(
      <button style={buttonStyles} onClick={props.onClick}>{props.text}</button>
  )
}
class App extends React.Component {
  state = {
    styles: {
      height: '90vh',
      margin: 0,
      padding: 30,
      fontFamily: 'Montserrat',
    }
  }

  changeBackground = () => {
    let defaultBackground = '#FFF';
    let darkBackground = '#000';
    let background = this.state.styles.background === '#FFF' ? darkBackground : defaultBackground
    let fontColor = this.state.styles.color === '#000' ? defaultBackground : darkBackground
    this.setState({
      styles: {
        ...this.state.styles,
        background: background,
        color: fontColor,
      }
    })
  }

  render(){
    const user = {
      firstName: 'Nico',
      lastName: 'Robin',
      userImage: userImage,
      title: 'Senior Software Developer',
      location: 'Indonesia',
      skills: [
        "HTML",
        "CSS",
        "SaSS",
        "JavaScript",
        "ReactJS",
        "Redux",
        "NodeJS",
        "MongoDB",
        "Python",
        "Flask",
        "Django",
        "Numpy",
        "Pandas",
        "Data Analysis",
        "MySQL",
        "GraphQL",
        "D3.js",
        "Gatsby",
        "Docker",
        "Heroku",
        "Git",
      ]
    }
    return (
      <section style={this.state.styles}>
        <Profile user={user} />
        <div style={{margin: '0 0 0 30px'}}>
          <Button text={'change background'} onClick={this.changeBackground}/>
        </div>
        <Skills skills={user.skills}/>
      </section>
    )
  }
}

export default App