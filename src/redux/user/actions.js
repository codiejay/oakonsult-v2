import { ActionTypes } from "./types";

export const setAdmin = (admin) => ({
  type: ActionTypes.SET_ADMIN,
  payload: admin,
});
export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
