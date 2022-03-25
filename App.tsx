import MainStackNavigation from "./src/navigations/MainStackNavigator";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/store";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
      <Provider store={store}>
        <MainStackNavigation/>
      </Provider>
  );
}
