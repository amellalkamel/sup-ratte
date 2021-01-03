import React from "react";
import "./publicite.css";

class Publicite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="publicite">
        <img src="https://pbs.twimg.com/media/C7CwBf4XAAAFSmn.jpg"></img>
        <div className="cont">CONTACT</div>
        <div className="point">......</div>
        <div className="info">
          {" "}
          Nous sommes à votre disposition pour toutes informations<br></br>{" "}
          <center>complémentaires</center>
        </div>
      </div>
    );
  }
}
export default Publicite;
