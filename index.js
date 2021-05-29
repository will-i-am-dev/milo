/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import '@react-native-async-storage/async-storage';
AppRegistry.registerComponent(appName, () => App);
