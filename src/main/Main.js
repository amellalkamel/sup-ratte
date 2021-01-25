import React from "react";
// import { Routes } from "../../serverExpress/typeorm-express-sample/src/routes.ts";
import "./main.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("http://localhost:3000/categories");
    const data = await response.json();
    console.log("data is ", data);
    this.setState({ categories: data });
  }
  render() {
    return (
      <div className="main">
        <div className="back">
          <div className="categorie_title">Categories</div>
          <div class="trait_dessus"></div>
          {console.log("categories in main div", this.state.categories)}
        </div>
      </div>
    );
  }
}

export default Main;
