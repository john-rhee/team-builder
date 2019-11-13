import React, { useState } from 'react';
import './App.css';

import Team from "./components/Team";
import TeamForm from "./components/TeamForm";

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "John",
      email: "john@email.com",
      role: "frontend"
    }
  ]);

  const addNewTeam = newinput => {
    const newTeam = {
      id: Date.now(),
      name: newinput.name,
      email: newinput.email,
      role: newinput.role
    };
    setTeam([...team, newTeam]);
  };
  
  return (
    <div className="App">
       <h1>My Team</h1>
       <TeamForm addNewTeam={addNewTeam}/>
       <Team team={team}/>
    </div>
  );
}

export default App;
