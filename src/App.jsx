import ReactReduxHookPage from './pages/ReactReduxHookPage';
import ReduxPage from './pages/ReduxPage';
import { Provider } from 'react-redux';
// import { Provider } from './my-react-redux';
import store from './store';

export default function App() {
  return (
    <div>
      <p>ReduxPage:</p>
      <ReduxPage />
      <hr />
      <p>ReactReduxHookPage:</p>
      <Provider store={store}>
        <ReactReduxHookPage />
      </Provider>
    </div>
  );
}
