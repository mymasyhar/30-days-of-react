import React from "react";

export default class Header extends React.Component {
  render(){
    const {
      name,
      title,
      origin:{country, city},
    } = this.props.data;

    return(
      <header>
        <h1>Hallo, my name is {name}</h1>
        <h3>{title} from {city}, {country}</h3>
      </header>
    )
  }
}