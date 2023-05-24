import { Component } from "react";

import { CountriesData } from "./assets/countries";

const imgStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
}

class Country extends Component {
  constructor(props){
    super(props)
  }
  
  state = {
    index: Math.floor(Math.random() * this.props.country.length),
  }
  changeIndex = () => {
    this.setState({
      index: Math.floor(Math.random() * this.props.country.length)
    })
  }

  render(){
    const index = this.state.index;
    const currency = Object.entries(this.props.country[index].currencies[Object.keys(this.props.country[index].currencies)])[0][1];
    return (
      <section>
        <div style={imgStyles}>
          <img style={{width: 400, height: 275}} src={this.props.country[index].flags.svg}/>
        </div>
        <main>
          <h2>{this.props.country[index].name.official}</h2>
          <p>Capital : {this.props.country[index].capital}</p>
          <p>population : {this.props.country[index].population}</p>
          <p>Currency: {currency}</p>
        </main>
        <button onClick={this.changeIndex}>change country</button>
      </section>
    )
  }
}

const appStyles = {
  fontFamily: 'montserrat',
  margin: 20,
}

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main style={appStyles}>
        <Country country={CountriesData}/>
      </main>
    )
  }
}
export default App
