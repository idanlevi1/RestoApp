import {createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen/Home'

const HomeRoute = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {headerMode: 'none'}
);

export default HomeRoute;