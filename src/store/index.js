import { createStore, combineReducers } from "../my-redux";
// import { createStore } from "../my-redux-test";

function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;

    case "MINUS":
      return state - 1;

    default:
      return state;
  }
}

function userReducer(state = 0, action) {
  switch (action.type) {
    case "user/ADD":
      return state + 1;

    case "user/MINUS":
      return state - 1;

    default:
      return state;
  }
}

// const store = createStore(countReducer);

const store = createStore(
  combineReducers({
    count: countReducer,
    user: userReducer,
  })
);
export default store;
