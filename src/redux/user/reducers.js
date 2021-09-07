import { ActionTypes } from "./types";

const INITIAL_STATE = {
  admin: null,
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
