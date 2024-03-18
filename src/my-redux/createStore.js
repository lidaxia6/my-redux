export default function createStore(reducer) {
  let currentState;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action); // reducer加工处理state
    currentListeners.forEach((listener) => listener()); // 执行订阅函数里面的 listener() { clg('123')}
  }

  // 将subscribe里的函数加入数组中,每次dispatch时依次执行数组里的函数
  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }
  // 因为reducer是在dispatch后执行的。
  // 在这里初始化reducer，即先执行一点reducer，返回默认值 switch语句中:default: return state。这样currentState就有值了
  dispatch({ type: "ASASASASASA/REDUX" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
