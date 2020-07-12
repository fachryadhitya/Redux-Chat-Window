import React from "react";
import "./Main.css";
import Empty from "../Empty/Empty";
import ChatWindow from "../ChatWindow/ChatWindow";

const Main = ({ user, activeUser }) => {
  const renderMainContent = () => {
    if (!activeUser) {
      return <Empty user={user} activeUser={activeUser} />;
    } else {
      return <ChatWindow activeUser={activeUser} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
