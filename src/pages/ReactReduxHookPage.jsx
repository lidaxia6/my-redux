import { useEffect } from "react";
import { useDispatch, useSelector } from "../my-react-redux";

export default function ReactReduxHookPage() {
  useEffect(() => {
    return () => {};
  }, []);

  const count = useSelector((state) => {
    console.log("当前state ", state);
    return state.count
  });

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>{count}</button>
    </div>
  );
}
