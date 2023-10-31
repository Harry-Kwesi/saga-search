import { combineReducers } from "redux";
import { SET_DATA, FETCH_DATA_FAILURE, SET_SEARCH_TERM } from "./actionTypes";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
  error: errorReducer,
  searchTerm: searchTermReducer,
});

export default rootReducer;
