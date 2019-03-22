import React from "react";
import Splash from "../screens/SplashScreen/Splash";
import {createRootNavigator} from '../navigation/AppNavigator';
import { AsyncStorage } from "react-native"
import { connect } from 'react-redux';
import { login } from '../store/modules/user/userActions';

class MainApp extends React.Component {
  state = {
    splash: true,
    signedIn: false
  };

  async componentDidMount() {
    await this.getAsyncStorageData()
    //  await AsyncStorage.removeItem('@MySuperStore:user',()=>{})
    setTimeout(() => {
      this.setState({ splash: false });
    }, 2500);
  }

  getAsyncStorageData = async() => {
    try {
      const value = await AsyncStorage.getItem('@MyStorage:user');
      if (value !== null) {
        this.setState({signedIn: true});
        this.props.onLogin();
      }
      else
        console.log('async storage no data');
     } catch (error) { console.log('error fetch async storage', error) };
  }

  render() {
    if (this.state.splash) {
      return <Splash />;
    }
    const Layout = createRootNavigator(this.state.signedIn)
    return <Layout />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user //We don't need 'user' for now, we can return {} if we want 
  }
}

const mapActionsToProps = {
  onLogin: login,
}

export default connect(mapStateToProps,mapActionsToProps)(MainApp);