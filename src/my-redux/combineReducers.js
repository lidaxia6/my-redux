// dispatch(action) -> currentState = reducer(currentState,action)，
// 这个reducer来自createStore(reducer),reducer 即 combination(currentState,action)
export default function combineReducers(reducers) {
  // 返回一个总的reducer (prevState,action) => nextState
  // createStore.js:  currentState = reducer(currentState, action)
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChanged = false;

    // 每次dispatch都会执行reducers中每一个reducer，来更新nextState
    for (const key in reducers) {
      const reducer = reducers[key];
      // action必须是唯一的，如果reducer没有找到对应的reducer，会返回默认的state。default: return state;
      nextState[key] = reducer(state[key], action);
    }

    return nextState;
  };
}
