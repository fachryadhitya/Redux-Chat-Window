import user from "./user";
import { combineReducers } from "redux";
import activeUser from "./activeUser";
import contact from "./contacts";
import messages from "./messages";
import typing from "./typing";


export default combineReducers({
  contact,
  user,
  activeUser,
  messages,
  typing
});
