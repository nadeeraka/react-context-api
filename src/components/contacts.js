import React, { Component } from "react";
import Contact from "./contact";
import { Consumer } from "../contaxt";

class Contacts extends Component {
  state = {
    data: "",
    isHidden: false
  };

  isHidden = () => {
    this.setState(ps => ({ isHidden: !ps.isHidden }));
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              {value.data.map(r => (
                <Contact
                  key={r.id}
                  value={r}
                  isHidden={this.state.isHidden}
                  onHidden={this.isHidden}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
