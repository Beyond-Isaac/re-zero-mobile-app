import { registerRootComponent } from 'expo';

import App from './App';
import SingIn from "./src/pages/sing-in/index";
import Welcome from "./src/pages/welcome/index";
import ForgotPassword from "./src/pages/forgot-password/index";
import SingUp from "./src/pages/sing-up/index";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Welcome);
