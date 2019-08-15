import React from "react";
import { Link } from "react-router-dom";

const Panels = props => {
  const teamMember = props.teamMember;
  return (
    <div>
      <div>{teamMember.name}</div>
      <div>{teamMember.email}</div>
      <div>{teamMember.role}</div>
      <Link to={`/edit/${teamMember.id}`}>Edit</Link>
    </div>
  );
};

export default Panels;
