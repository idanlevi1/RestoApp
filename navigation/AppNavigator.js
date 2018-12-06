import { createSwitchNavigator } from 'react-navigation';
import SignupRoute from './SignupNavigator';
import HomeRoute from './HomeNavigator';

export const createRootNavigator = (signedIn = false) => createSwitchNavigator({
  Home: HomeRoute,
  Signup: SignupRoute,
},
{
  initialRouteName: signedIn ? "Home" : "Signup"
});