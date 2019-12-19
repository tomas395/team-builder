import React from "react";

const Team = props => {
  return (
    <div className="member-list">
      {props.member.map(member => (
        <div className="team" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
