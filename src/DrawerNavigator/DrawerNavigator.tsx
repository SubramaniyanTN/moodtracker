import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";
import Profile from "../Screens/Profile/Profile";

export type DashBoardDrawerNavigatorType={
    Profile:undefined;
    DrawerNavigatorHome:undefined
}

const DrawerNavigator=()=>{
    const DashBoardDrawerNavigator=createDrawerNavigator<DashBoardDrawerNavigatorType>()
    return(
        <>
        <DashBoardDrawerNavigator.Navigator initialRouteName="DrawerNavigatorHome" >
            <DashBoardDrawerNavigator.Screen name="DrawerNavigatorHome" component={BottomTabNavigator} />
            <DashBoardDrawerNavigator.Screen name="Profile" component={Profile} />
        </DashBoardDrawerNavigator.Navigator>
        </>
    )
}

export default DrawerNavigator;