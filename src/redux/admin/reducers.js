import { ActionTypes } from "./types";

const INITIAL_STATE = {
  admin: null,
  toggle_editor: false,
  notificationCount: 0,
};

const AdminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };

    case ActionTypes.UPDATE_NOTIFICATION:
      return {
        ...state,
        notificationCount: action.payload,
      };
    case ActionTypes.UPDATE_TRASH:
      return {
        ...state,
        trash: action.payload,
      };
    default:
      return state;
  }
};

export default AdminReducer;
