import React from "react";
import "./contact.css";
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact">
        <nav>
          <ul>
            <li>
              <a href="">Conditions Generales De Vente</a>
            </li>
            <li>
              <a href="">Qui Sommes Nous</a>
            </li>
            <li>
              <a href="">Contactez-Nous</a>
            </li>
            <li>
              <a href="">Mot De Passe Perdu</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="bottom_contact">©Supérette Kamatchou 2021</div>
      </div>
    );
  }
}

export default Contact;
