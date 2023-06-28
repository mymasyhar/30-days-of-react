import { Component } from "react"

export class App extends Component {
  state = {
    top: '',
    right: '',
    bottom: '',
    left: '',

  }

  greetPeople = () => {
    alert('hallo')
  }

  handlePosition = (e) => {
    this.setState({
      top: `${Math.floor(Math.random() * 1000)}px`,
      right: `${Math.floor(Math.random() * 1000)}px`,
      bottom: `${Math.floor(Math.random() * 1000)}px`,
      left: `${Math.floor(Math.random() * 1000)}px`
    })
  }

  handleMouseMove = (e) => {
    this.setState({
      top: `${Math.floor(Math.random() * 80)}vh`,
      right: `${Math.floor(Math.random() * 80)}vw`,
      bottom: `${Math.floor(Math.random() * 80)}vh`,
      left: `${Math.floor(Math.random() * 80)}vw`
    })
  }

  render(){
    return (
      <>
        <div onMouseEnter={this.handleMouseMove}>
          <h1>Haloo</h1>
          <button onClick={this.greetPeople}>hallo</button>
          <button onClick={this.handlePosition}>hallo</button>
          <div style={{
            position: 'relative',
            top: this.state.top,
            right: this.state.right,
            bottom: this.state.bottom,
            left: this.state.left,
          }}>
            <h1>Catch me if you can!</h1>
          </div>
        </div>
      </>
    )
  }
}

export default App
