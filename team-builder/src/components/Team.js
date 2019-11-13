import React from "react";

const Team = props => {
    return (
      <div>
         {props.team.map(team => (
        <div key={team.id}>
          <p>Name: {team.name}</p>
          <p>Email: {team.email}</p>
          <p>Role: {team.role}</p>
        </div>
      ))}
     
      </div>
    );
  };
  
  export default Team;
  