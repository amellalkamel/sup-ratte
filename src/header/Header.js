import React from "react";
import "./header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <center>
          <h1>Supérette el BARRAKA</h1>
        </center>
        <center>
          <h6>46, station rghaia chete, Reghaia, Alger</h6>
        </center>
        <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Supérette</a>
            </li>
            <li>
              <a href="#">Mon Compte</a>
            </li>
            <li>
              <a href="#">Panier</a>
            </li>
            <li>
              <a href="#">Comment Ca Marche ?</a>
            </li>
            <li>
              <input></input>
            </li>
            <li>0.00 DA</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
