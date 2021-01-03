import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./panier.css";

class Panier extends React.Component {
  render() {
    return (
      <div className="panier">
        <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
        <div className="circle"></div>
      </div>
    );
  }
}

export default Panier;
