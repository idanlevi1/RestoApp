import React from "react";
import Splash from "../screens/SplashScreen/Splash";
import {createRootNavigator} from '../navigation/AppNavigator'

export default class MainApp extends React.Component {
  state = {
    splash: true,
    signedIn: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splash: false });
    }, 2500);
  }

  render() {
    if (this.state.splash) {
      return <Splash />;
    }
    const Layout = createRootNavigator(this.state.signedIn)
    return <Layout />;
  }
}
