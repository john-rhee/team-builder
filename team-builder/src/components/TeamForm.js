import React, { useState } from "react";

const TeamForm = props => {

    const [team, setTeam] = useState({ name: "", type: "", role: "" });

    
    const handleChanges = event => {
        setTeam({ ...team, [event.target.name]: event.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({ name: "", type: "", role: "" });
      };


    //Practice
    const [testing, setTesting] = useState("");

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


        //Practice

        

        <br></br>
        <label htmlFor="inputlabel">Enter Here!</label>
        <input type="text" id="inputlabel" onChange={event=>{setTesting(event.target.value);}}>
        </input>
        <select id="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <label htmlFor="checkboxlabel">Check Here!</label>
        <input type="checkbox" id="checkboxlabel"/>

        <input type="submit" />

        <h3>This is {testing}</h3>

      </form>
    );
  };
  
  export default TeamForm;
  