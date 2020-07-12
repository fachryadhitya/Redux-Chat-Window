import React, { Component } from "react";
import "./Chat.css";
import Scrollbar from "react-scrollbars-custom";

const Chats = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is_user_msg" : ""}`}>{text}</span>
  );
};

class Chat extends Component {
  render() {
    return (
        <Scrollbar>
      <div className="Chats">
       
          {this.props.messages.map((message) => (
            <Chats message={message} key={message.number} />
          ))}
        
      </div>
      </Scrollbar>
    );
  }
}

export default Chat;
