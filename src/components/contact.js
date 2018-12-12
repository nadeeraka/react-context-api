import React from "react";
import PropTypes from "prop-types";
const width = {
  width: "18rem"
};
const Contact = props => (
  <>
    <div className="mt-4">
      {props.value.name}
      <ul>
        <li>
          <p className="btn btn-primary" onClick={props.onHidden}>
            View Details
          </p>
        </li>
      </ul>
    </div>
    {props.isHidden && (
      <div className="container-fluid">
        <div className="card mt-4" style={width}>
          <div className="card-body">
            <h5 className="card-title">{props.value.name}</h5>

            <hr />

            <>
              <p className="card-text"> {props.value.email}</p>
              <p className="card-text"> {props.value.phone}</p>
            </>
          </div>
        </div>
      </div>
    )}
  </>
);

Contact.propTypes = {
  value: PropTypes.object,
  isHidden: PropTypes.bool
};

export default Contact;
