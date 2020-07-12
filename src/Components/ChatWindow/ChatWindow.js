import React from "react";
import store from "../../store";
import Header from "../Header/Header";
import Chat from "../Chats/Chat";
import _ from "lodash";
import "./ChatWindow.css";
import Message from "../../Containers/Message/Message";

const ChatWindow = ({ activeUser }) => {
  const state = store.getState();
  const activeUserId = state.contact[activeUser];
  const activeMessages = state.messages[activeUser];
  console.log(activeUserId);
  const { typing } = state;
  return (
    <div className="ChatWindow">
      <Header user={activeUserId} />
      <Chat messages={_.values(activeMessages)} />
      <Message value={typing} />
    </div>
  );
};
export default ChatWindow;
