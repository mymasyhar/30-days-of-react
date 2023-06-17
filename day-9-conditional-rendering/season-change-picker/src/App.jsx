import { Component } from "react"
import { Button } from "./Button"

class App extends Component {
  state = {
    index: 0
  }
  nextSeason = () => {
    this.setState({
      index: this.state.index + 1
    })
  }
  backSeason = () => {
    this.setState({
      index: this.state.index - 1
    })
  }
  render(){
    let seasons = [
      {
        name : 'autumn',
        background: '#E57C23'
      },
      {
        name : 'winter',
        background: '#AEE2FF'
      },
      {
        name : 'spring',
        background: '#D0F5BE'
      },
      {
        name : 'summer',
        background: '#FEFF86'
      },
    ]
    let seasonTheme = {
      margin: 0,
      padding: 0,
      fontFamily: 'Montserrat',
      background: seasons[this.state.index].background,
      height: '90vh'
    }
    const buttonTheme = {
      border: 'none',
      padding: 10,
      borderRadius: 5,
      fontFamily: 'Montserrat',
      background: ''
    }
    let hasNext = this.state.index < seasons.length -1;
    let hasPrevious = this.state.index > 0;
    return(
      <section style={seasonTheme}>
        <p>we are at the {seasons[this.state.index].name} season</p>
        <Button style={buttonTheme} text={!hasPrevious ? `can't change to previous season` : `back to season ${seasons[this.state.index-1].name}`} onClick={this.backSeason} disabled={!hasPrevious}/>
        <Button style={buttonTheme} text={!hasNext ? `can't change to next season` : `next to season ${seasons[this.state.index+1].name}`} onClick={this.nextSeason} disabled={!hasNext}/>
      </section>
    )
  }
}

export default App
