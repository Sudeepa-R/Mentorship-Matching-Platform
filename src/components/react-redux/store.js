import { createStore } from "redux";
import ActionType from "./ActionType";


const initialState = {
  headerTitle: "",
  activePage: "",
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HEADER_TITLE:
      return { ...state, headerTitle: action.payload };
    case ActionType.SET_ACTIVEPAGE:
      return { ...state, activePage: action.payload };
    default:
      return state;
  }
};

const store = createStore(headerReducer);

export default store;
