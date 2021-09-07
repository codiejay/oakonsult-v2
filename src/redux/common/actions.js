import { ActionTypes } from "./types";

export const setQoutes = (quotes) => ({
  type: ActionTypes.SET_QUOTES,
  payload: quotes,
});
export const setArticleOfTheWeek = (data) => ({
  type: ActionTypes.SET_ARTICLE_OF_THE_WEEK,
  payload: data,
});
