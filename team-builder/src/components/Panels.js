import React from "react";
import { Link } from "react-router-dom";

const Panels = props => {
  const teamMember = props.teamMember;
  return (
    <div className="info-container">
      <div className="box">{teamMember.name}</div>
      <div className="box">{teamMember.email}</div>
      <div className="box">{teamMember.role}</div>
      <Link to={`/edit/${teamMember.id}`}>Edit</Link>
    </div>
  );
};

export default Panels;
