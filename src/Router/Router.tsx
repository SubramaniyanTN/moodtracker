import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import MainStackNavigator from '../MainStackNavigator/MainStackNavigator';
import {useContext} from 'react'
import { AuthContext, AuthContextType } from '../Context/AuthContextWrapper';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';

const Router = () => {
    const {isAuthenticated}=useContext<AuthContextType>(AuthContext)
  return (
    <>
      <NavigationContainer>
        {isAuthenticated ? <BottomTabNavigator /> : <DrawerNavigator />}
      </NavigationContainer>
    </>
  );
};

export default Router;
