import { contacts } from "../static-data";

export default (state = contacts, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      const contactId = action.payload;
      const { [contactId]: deleted, ...newState } = state;
      return newState;
    default:
      return state;
  }
};
