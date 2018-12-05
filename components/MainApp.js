import React from "react";
import Splash from '../screens/SplashScreen/Splash';
import SignupNav from '../navigation/SignupNavigator';

export default class MainApp extends React.Component {
  state = {
    splash: true
  }
  
  componentDidMount() {
    setTimeout(() => {
    this.setState({splash:false})      
    }, 2500);
  };
  
  render() {
    return (
      this.state.splash ? 
      <Splash/>
      :
      <SignupNav/>
    );
  }
}

