/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {App} from './src/App';
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
const RNredux = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
AppRegistry.registerComponent(appName, () => RNredux);
