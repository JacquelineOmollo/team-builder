import React from "react";

const Panels = props => {
  const teamMember = props.teamMember;
  return (
    <div>
      <div>{teamMember.name}</div>
      <div>{teamMember.email}</div>
      <div>{teamMember.role}</div>
    </div>
  );
};

export default Panels;
