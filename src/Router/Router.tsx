import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import MainStackNavigator from '../MainStackNavigator/MainStackNavigator';
import {useContext} from 'react'
import { AuthContext, AuthContextType } from '../Context/AuthContextWrapper';

const Router = () => {
    const {isAuthenticated}=useContext<AuthContextType>(AuthContext)
  return (
    <>
      <NavigationContainer>
        {isAuthenticated ? <BottomTabNavigator /> : <MainStackNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Router;
