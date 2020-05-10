//TODO: DONE create contact using all actions

import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT
} from "./action.types";

//TODO: DONE use switch case

//we have to define what each of them going todo

export default (state, action) => {
switch (action.type) {
  case SET_CONTACT:
    return action.payload == null ? {...state, contacts:[]}
    :{...state, contacts: action.payload}
    
  case SET_LOADING:
    return {...state, isLoading: action.payload}

  case CONTACT_TO_UPDATE:
    return {
      ...state,
      contactToUpdate: action.payload,
      contactToUpdateKey: action.key
    }

  case SET_SINGLE_CONTACT:
    return {
      ...state,
      contact: action.payload,

    }
  default:
    return state;
}
} 