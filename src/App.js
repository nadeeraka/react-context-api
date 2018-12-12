import React, { Component } from "react";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts";
import Provider from "./contaxt";
class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
