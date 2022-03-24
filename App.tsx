import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
