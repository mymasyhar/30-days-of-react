import React from "react";
import userImg from "./assets/nicorobin.png";

const headerStyles = {
  padding: 20,
}

const imgStyles = {
  width: 250,
  height: 250,
  backgroundSize: 'cover',
  backgroundColor: '#AFD3E2',
  borderRadius: '50%'
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header style={headerStyles}>
        <img style={imgStyles} src={this.props.user.image} alt="user-img" />
        <h1>
          {this.props.user.firstName} {this.props.user.lastName}
        </h1>
        <p>
          {this.props.user.title}, {this.props.user.location}
        </p>
      </header>
    );
  }
}

const bodyStyles = {
  padding: 20,
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

class Body extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main style={bodyStyles}>
        <h2>Skills</h2>
        <div style={skillsContainerStyles}>
          {this.props.skills.map(skill => (<p style={skillsStyles} key={skill}>{skill}</p>))}
        </div>
      </main>
    );
  }
}

const appStyles = {
  margin: 30,
  fontFamily: 'Montserrat',
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = {
      firstName: "Nico",
      lastName: "Robin",
      title: "Senior Software Engineer",
      location: "Indonesia",
      image: userImg,
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
      ],
    };
    return (
      <section style={appStyles}>
        <Header user={user} />
        <Body skills={user.skills} />
      </section>
    );
  }
}

// function App() {

//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   )
// }

export default App;
