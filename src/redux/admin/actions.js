import { ActionTypes } from "./types";

export const toggleEditor = (data) => ({
  type: ActionTypes.TOGGLE_EDITOR,
  payload: data,
});

export const setNotificationCount = (count) => ({
  type: ActionTypes.UPDATE_NOTIFICATION,
  payload: count,
});

export const setAdmin = (admin) => ({
  type: ActionTypes.SET_ADMIN,
  payload: admin,
});
