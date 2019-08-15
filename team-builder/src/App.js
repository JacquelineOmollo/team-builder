import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Forms from "./components/Forms";
import Panels from "./components/Panels";
import "./App.css";
import { Route, Link } from "react-router-dom";

function App() {
  const [teamMember, setTeam] = useState([
    { id: 0, name: "Jackie", email: "abcd@gmail.com", role: "Full-Stack Dev" },
    { id: 1, name: "Polycarp", email: "1234@gmail.com", role: "Teacher" },
    { id: 2, name: "Edan", email: "milk@gmail.com", role: "Toddler" }
  ]);

  //Add TeamMembers
  const addTeamMember = people => {
    setTeam([...teamMember, { ...people, id: Date.now() }]);
  };
  //Edit TeamMembers
  const editTeamMember = editedTeamMember => {
    const editTeam = [...teamMember];
    const teamIndex = editTeam.findIndex(
      people => people.id === editedTeamMember.id
    );
    teamIndex[0] = editedTeamMember;
    setTeam(editTeam);
  };
  return (
    <div className="App">
      <h1>Build Your Team</h1>
      <Link to="/" className="nav">
        Home
      </Link>
      <Link to="/add" className="nav">
        Add Team Memeber
      </Link>
      <Route
        path="/add"
        render={props => <Forms {...props} submitTeam={addTeamMember} />}
      />
      <Route
        exact
        path="/"
        render={props =>
          teamMember.map(teamMember => <Panels teamMember={teamMember} />)
        }
      />
      <Route path="/edit/:id" render={props => <Forms {...props} />} />
    </div>
  );
}

export default App;
