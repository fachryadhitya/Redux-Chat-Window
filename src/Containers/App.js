import React from "react";
import "./App.css";
import Main from "../Components/Main/Main";
import store from "../store";
import _ from "lodash";
import Sidebar from "../Components/Sidebar/Sidebar";


function App() {
  const { contact, user, activeUser } = store.getState();
  
  return (
    <div className="App">
      <Sidebar contacts={_.values(contact)} />
      <Main user={user} activeUser={activeUser}/>
    </div>
  );
}

export default App;
