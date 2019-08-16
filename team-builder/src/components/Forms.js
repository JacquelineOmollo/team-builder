import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

///form function
const Forms = props => {
  const { submitTeam, initialTeamMember, textButton, history } = props;
  const [people, setPeople] = useState(
    initialTeamMember || {
      name: "",
      email: "",
      role: ""
    }
  );
  const setChange = event => {
    setPeople({ ...people, [event.target.name]: event.target.value });
  };

  ///button function
  const submitInfo = event => {
    event.preventDefault();
    submitTeam(people);
    setPeople({
      name: "",
      email: "",
      role: ""
    });
    history.push("/");
  };
  return (
    <Form onSubmit={submitInfo}>
      <Form.Field>
        <input
          placeholder="name"
          value={people.name}
          name="name"
          onChange={setChange}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="email"
          value={people.email}
          type="email"
          name="email"
          onChange={setChange}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="role"
          value={people.role}
          name="role"
          onChange={setChange}
        />
      </Form.Field>
      <Button type="submit">{textButton}</Button>
    </Form>
  );
};
export default Forms;
