import { useEffect, useState } from 'react';
import store from '../store';

export default function ReduxPage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('store ==>', store);
    console.log('getState()', store.getState());
    let unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
      console.log(store.getState());
    });

    return () => {
      unsubscribe();
    };
  });

  const add = () => {
    store.dispatch({ type: 'ADD' });
  };

  const minus = () => {
    store.dispatch({ type: 'MINUS' });
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => add()}>+1</button>
      <button onClick={() => minus()}>-1</button>
    </div>
  );
}
