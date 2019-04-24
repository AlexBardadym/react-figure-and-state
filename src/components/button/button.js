import React, { Component, Fragment } from "react";
import "./button.scss";
import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css/dist/js/materialize.min.js";

class Button extends Component {
  getFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => console.log(json));
  };

  render() {
    return (
      <Fragment>
        <a
          onClick={this.getFromApi}
          className="waves-effect waves-light btn-small"
        >
          {this.props.buttonName}
        </a>
        <div />
      </Fragment>
    );
  }
}

export default Button;
