import React from "react";

const Header = () => (
  <React.Fragment>
    <div className="container-fluid">
      <ul className="nav nav-pills mt-4">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Contact Manager
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Add Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Remove Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </React.Fragment>
);
export default Header;
