import React, { Component } from "react";

const Context = React.createContext();

export default class Provider extends Component {
  state = {
    data: [
      {
        id: 0,
        name: "Danial Shiffman",
        email: "danial@fun.com",
        phone: 12343
      },
      {
        id: 3,
        name: "michel bay",
        email: "danial@fun.com",
        phone: 12343
      },
      {
        id: 4,
        name: "Danial Shiffman",
        email: "danial@fun.com",
        phone: 12343
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
