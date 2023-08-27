import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import Profile from '../Screens/Profile/Profile';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export type DashBoardDrawerNavigatorType = {
  Profile: undefined;
  DrawerNavigatorHome: undefined;
};

const DrawerNavigator = () => {
  const DashBoardDrawerNavigator =
    createDrawerNavigator<DashBoardDrawerNavigatorType>();
  return (
    <>
      <DashBoardDrawerNavigator.Navigator screenOptions={{headerShown:true}}  initialRouteName="DrawerNavigatorHome">
        <DashBoardDrawerNavigator.Screen
          name="DrawerNavigatorHome"
          component={BottomTabNavigator}
          options={(props)=>{
            const route = getFocusedRouteNameFromRoute(props.route) ?? 'Home';
            let title
            if(route==='Home'){
                title = 'Home'
            }else if(route==='History'){
                title = 'History'
            }else if(route==='Analytics'){
                title = 'Analytics'
            }
            return {
                headerTitle:title
            }
          }}
        />
        <DashBoardDrawerNavigator.Screen name="Profile" component={Profile} />
      </DashBoardDrawerNavigator.Navigator>
    </>
  );
};

export default DrawerNavigator;
