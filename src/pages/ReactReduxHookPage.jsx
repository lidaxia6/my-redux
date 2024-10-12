import { useEffect } from 'react';
// import { useDispatch, useSelector } from "../my-react-redux";
import { useDispatch, useSelector } from 'react-redux';

export default function ReactReduxHookPage() {
  useEffect(() => {
    return () => {};
  }, []);

  const count = useSelector((state) => {
    console.log('当前state ', state);
    return state.count;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'ADD' })}>+1</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-1</button>
    </div>
  );
}
