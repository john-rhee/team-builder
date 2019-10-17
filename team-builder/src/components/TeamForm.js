import React, { useState } from "react";

const TeamForm = props => {

    const [team, setTeam] = useState({ name: "", type: "", role: "" });


    const handleChanges = e => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({ name: "", type: "", role: "" });
      };


    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={team.name}>
        </input>
        <br></br>

        <label htmlFor="email">Email</label>    
        <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={team.email}>     
        </input>
        <br></br>

        <label htmlFor="role">Role</label>    
        <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={team.role}>   
            
        </input>
        <br></br>
        <button type="submit">Add New Team</button>

      </form>
    );
  };
  
  export default TeamForm;
  