import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <center>
          <h1>Supérette Kamatchou</h1>
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
              <InputGroup className="mb-3">
                <InputGroup.Prepend></InputGroup.Prepend>
                <FormControl
                  placeholder="Rechercher des Produits"
                  aria-label="Recherche"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </li>
            <li>0.00 DA</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
