import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./sociaux.css";

class Sociaux extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sociaux">
        <div class="cercle">
          {" "}
          <FontAwesomeIcon
            icon={faPlusSquare}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {" "}
          <FontAwesomeIcon
            icon={faPlusSquare}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {" "}
          <FontAwesomeIcon
            icon={faPlusSquare}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {" "}
          <FontAwesomeIcon
            icon={faPlusSquare}
            className="button-add-new-user-gray"
          />
        </div>
        <div class="cercle">
          {" "}
          <FontAwesomeIcon
            icon={faPlusSquare}
            className="button-add-new-user-gray"
          />
        </div>
      </div>
    );
  }
}

export default Sociaux;
