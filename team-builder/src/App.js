import React, { useState } from "react";
// import Form from "../src/components/Form";
import Panels from "../src/components/Panels";
import "./App.css";

function App() {
  const [teamMember, setTeam] = useState([
    { name: "Jackie", email: "abcd@gmail.com", role: "Full-Stack Dev" },
    { name: "Polycarp", email: "1234@gmail.com", role: "Teacher" },
    { name: "Edan", email: "milk@gmail.com", role: "Toddler" }
  ]);
  return (
    <div className="App">
      {teamMember.map(teamMember => (
        <Panels teamMember={teamMember} />
      ))}
    </div>
  );
}

export default App;
