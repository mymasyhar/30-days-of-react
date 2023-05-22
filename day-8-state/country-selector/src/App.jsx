import { Component } from "react";

import { CountriesData } from "./assets/countries";

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {
      title,
      challenge,
      author: {firstName, lastName},
    } = this.props.data;
    return(
      <header>
        <h1>{title}</h1>
        <h2>{challenge}</h2>
        <p>{firstName} {lastName}</p>
      </header>
    )
  }
}

class Country extends Component{
  
  constructor(props){
    super(props)
  }
  
  render(){
    const index = Math.floor(Math.random() * CountriesData.length);

    return(
      <section>
        <article>
          <div>
            <img src={CountriesData[index].flags.svg} alt={CountriesData[index].name.official} />
          </div>
          <p>name : {CountriesData[index].name.official}</p>
          <p>capital : {CountriesData[index].capital}</p>
          <p>population : {CountriesData[index].population}</p>
          <p>currencies : {Object.keys(CountriesData[index].currencies)}</p>
        </article>
        <button>change country</button>
      </section> 
    )
  }
}

class App extends Component{
  render(){
    const data = {
      title: 'Country Explorer',
      challenge: '30 Days of React',
      author: {
        firstName: 'Nico',
        lastName: 'Robin'
      }
    }
    return(
      <main>
        <Header data={data}/>
        <h1>Hallo!</h1>
        <Country />
      </main>
    )
  }
}
export default App
