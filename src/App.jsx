import ReactReduxHookPage from "./pages/ReactReduxHookPage";
import ReduxPage from "./pages/ReduxPage";
import { Provider } from "./my-react-redux";

import store from "./store";

export default function App() {
  return (
    <div>
      {/* <ReduxPage /> */}
      <Provider store={store}>
        <ReactReduxHookPage />
      </Provider>
    </div>
  );
}
