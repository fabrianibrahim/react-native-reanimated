import { AppRegistry, LogBox, Platform } from 'react-native';
import { name as appName } from './app.json';
import ${component} from '${path}';

AppRegistry.registerComponent(appName, () => ${component});

// TODO(Bacon): When `expo` has removed Updates, replace this with using the `expo` entry for better error handling
if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root');
  AppRegistry.runApplication(appName, { rootTag });
}

LogBox.ignoreLogs([
  'RCTBridge required dispatch_sync to load REAModule. This may lead to deadlocks',
]);
