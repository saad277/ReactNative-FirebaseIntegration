/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import App2 from './App2'
import App3 from './App3'

AppRegistry.registerComponent(appName, () => App2);
