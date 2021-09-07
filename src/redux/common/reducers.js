import { ActionTypes } from "./types";

const INITIAL_STATE = {
  quotes: [],
  articleOfTheWeek: {},
};

const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
    case ActionTypes.SET_ARTICLE_OF_THE_WEEK:
      return {
        ...state,
        articleOfTheWeek: action.payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
