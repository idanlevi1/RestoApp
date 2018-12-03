import React from "react";
import Splash from '../screens/SplashScreen/Splash';
import Signup from '../screens/SignupScreen/Signup';

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
      <Signup/>
    );
  }
}

