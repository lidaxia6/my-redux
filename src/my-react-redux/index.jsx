import { useState, useSyncExternalStore } from "react";
import { useLayoutEffect } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { useContext } from "react";

// ! 1. 创建Context
const Context = createContext();

// ! 2. Provider()
export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

/**
 *
 * @param 函数
 * @returns 状态值
 */
export function useSelector(selector) {
  const store = useContext(Context);
  const { getState, subscribe } = store;

  // const forceUpdate = useForceUpdate();
  // useLayoutEffect(() => {
  //   const unsubscribe = subscribe(() => {
  //     forceUpdate();
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [subscribe]);

  // console.log('getState()',getState())
  // const selectedState = selector(getState()); // 将`当前状态值state`作为参数传递给回调函数selector(state)

  // return selectedState; // 返回 回调函数 修改后的值

  const state = useSyncExternalStore(subscribe, getState);

  const selectedState = selector(state);

  return selectedState;
}

export function useDispatch() {
  const store = useContext(Context);
  const { dispatch } = store;
  return dispatch;
}

// 自定义HOOK,使用useState()来让react组件刷新
function useForceUpdate() {
  const [state, setState] = useState(0);
  const update = useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  return update;
}
