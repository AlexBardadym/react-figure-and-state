import React, { Component } from "react";
import "./button-table.scss";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class ButtonTable extends Component {
  state = {
    responseArray: [],
    text: "GET",
    resultVisible: {
      display: "none"
    },
    table: ""
  };

  getFromApi = () => {
    if (this.state.text === "Received") {
      this.setState({
        text: "GET",
        table: "",
        resultVisible: {
          display: "none"
        }
      });
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json =>
          this.setState({
            responseArray: json,
            text: "Received",
            resultVisible: {
              display: "block"
            }
          })
        )
        .then(() => {
          let tableHTML = "";
          for (let i = 0; i < 12; i++) {
            tableHTML += `<tr>
              <td>${this.state.responseArray[i].userId}</td>
              <td>${this.state.responseArray[i].id}</td>
              <td>${this.state.responseArray[i].title}</td>
              <td>${this.state.responseArray[i].body}</td>
            </tr>`;
          }
          this.setState({
            table: tableHTML
          });
        });
    }
  };

  render() {
    const { table, text, resultVisible } = this.state;
    return (
      <div>
        <a onClick={this.getFromApi} className="waves-effect waves-light btn">
          {text}
        </a>
        <div className="result" style={resultVisible}>
          <table className="blue-grey lighten-3">
            <thead>
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{ __html: table }} />
          </table>
        </div>
      </div>
    );
  }
}

export default ButtonTable;
