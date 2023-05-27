import { Component } from "react";

const buttonStyles = {
  padding: 10,
  border: 'none',
}
const articleStyles = {
  padding: 10,
  border: "none",
  fontFamily: "Montserrat",
  background: "#EFB503",
};
const buttonThemes = {
  autumn: '#C07F00',
  winter: '#D4FAFC',
  spring: '#A4D0A4',
  summer: '#FFD95A',
}
class App extends Component {
  state = {
    ...articleStyles,
  };
  autumnButton = () => {
    let autumnTheme = "#C07F00";
    this.setState({
      ...articleStyles,
      background: autumnTheme,
    });
  };
  winterButton = () => {
    let winterTheme = "#D4FAFC";
    this.setState({
      background: winterTheme,
    });
  };
  springButton = () => {
    let springTheme = "#A4D0A4";
    this.setState({
      background: springTheme,
    });
  };
  summerButton = () => {
    let summerTheme = "#FFD95A";
    this.setState({
      background: summerTheme,
    });
  };

  render() {
    return (
      <main>
        <div style={this.state}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officiis amet aliquid aut nobis officia nemo odio dolorem incidunt
            ex veniam, pariatur at, nesciunt perspiciatis explicabo nam, quis
            beatae harum! Ut ad, beatae doloremque similique fugit reprehenderit
            debitis atque, quia aut illum neque laboriosam, libero nemo. Nam,
            officia tenetur, reiciendis eaque aspernatur dignissimos neque quae
            illo expedita velit perspiciatis iusto, quibusdam maiores quidem
            earum? Eum, ad. Doloremque expedita sequi quam, ipsum consequatur id
            assumenda odit dolorem. Consequatur, provident. Possimus eligendi
            laboriosam blanditiis doloribus sit, accusamus omnis odio maiores
            eveniet temporibus iste nostrum, magnam vel adipisci necessitatibus
            laudantium, quis voluptatum aliquam!
          </p>
        </div>
        <button style={{...buttonStyles, background: buttonThemes.autumn}} onClick={this.autumnButton}>autumn</button>
        <button style={{...buttonStyles, background: buttonThemes.winter}} onClick={this.winterButton}>winter</button>
        <button style={{...buttonStyles, background: buttonThemes.spring}} onClick={this.springButton}>spring</button>
        <button style={{...buttonStyles, background: buttonThemes.summer}} onClick={this.summerButton}>summer</button>
      </main>
    );
  }
}

export default App;
