import React, { Component } from "react";
import "./App.scss";
import ButtonTable from "./components/button-table/button-table";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <ButtonTable />
        <ButtonTable />
      </div>
    );
  }
}

export default App;
