import React, { useState } from "react";
import "./App.css";
import Form from "./teamform";
import Team from "./savedlist";

function App() {
  const [memberList, setMemberList] = useState([
    {
      id: 1,
      name: "Captain Falcon",
      role: "Dunkmaster",
      email: "BigBlue@fzero.com"
    },

    {
      id: 2,
      name: "Ness",
      role: "Slugger",
      email: "PKKevin67@psinet.com"
    },
    {
      id: 3,
      name: "Banjo-Kazooie",
      role: "Snowflake Cleaner",
      email: " BearlyAlive@B&K.com"
    },
    {
      id: 4,
      name: "Joker",
      role: "Looking cool",
      email: "PhantomThief@callingcard.com"
    }
  ]);

  const addNewMember = member => {
    const newMemberData = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMemberList([...memberList, newMemberData]);
  };

  return (
    <div className="App">
      <h1>All Star Team</h1>
      <Form addNewMember={addNewMember} />
      <Team member={memberList} />
    </div>
  );
}

export default App;
