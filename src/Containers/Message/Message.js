import React from "react";
import "./Message.css";
import store from "../../store";
import { setTypingValue, sendMessage } from "../../actions";

const Message = ({ value }) => {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const state = store.getState()
  const handleSubmit = e => {
      e.preventDefault()
      const {typing, activeUser} = state
      store.dispatch(sendMessage(typing, activeUser))
  }
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="type your message"
      />
    </form>
  );
};

export default Message
