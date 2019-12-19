import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    id: "",
    role: ""
  });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      {/* This is the Team members name */}

      <form onSubmit={submitForm}>
        <label htmlFor="name">Member's Name: </label>
        <input
          onChange={handleChanges}
          id="name"
          name="name"
          value={member.name}
          type="text"
          placeholder="Name"
        ></input>

        {/* this is the Team members Email */}

        <label htmlFor="email">Member's Email: </label>
        <input
          onChange={handleChanges}
          id="email"
          name="email"
          value={member.email}
          type="text"
          placeholder="Email"
        ></input>

        {/* this is the Team members position */}

        <label htmlFor="role">Member's Position</label>
        <input
          onChange={handleChanges}
          id="role"
          name="role"
          value={member.role}
          type="text"
          placeholder="Position"
        ></input>

        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
};

export default Form;
