import React, { useState } from "react";

///form function
const Form = props => {
  const { setTeam } = props;
  const [people, setPeople] = useState({
    name: "",
    email: "",
    role: ""
  });
  const setChange = event => {
    setPeople({ ...people, [event.target.name]: event.target.value });
  };

  ///button function
  const submitInfo = event => {
    event.preventDefault();
    setTeam(teamMember => [...teamMember, people]);
    setPeople({
      name: "",
      email: "",
      role: ""
    });
  };
  return (
    <form onSubmit={submitInfo}>
      <input
        placeholder="name"
        value={people.name}
        name="name"
        onChange={setChange}
      />
      <input
        placeholder="email"
        value={people.email}
        type="email"
        name="email"
        onChange={setChange}
      />
      <input
        placeholder="role"
        value={people.role}
        name="role"
        onChange={setChange}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};
export default Form;
