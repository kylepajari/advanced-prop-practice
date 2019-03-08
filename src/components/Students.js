import React from "react";
import PropTypes from "prop-types";

const Students = props => {
  return (
    <div>
      <h3>The group name is:</h3>
      <p>{props.groupName}</p>

      <h3>The students are:</h3>
      {props.names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

Students.propTypes = {
  names: PropTypes.array.isRequired,
  groupName: PropTypes.string
};

export default Students;
