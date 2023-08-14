import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Screens/StackScreens/AuthScreens/Login"

const MainStackNavigator=()=>{
    const StackNavigator=createStackNavigator<{
        login:undefined;
        dashboard:undefined;
    }>()

    return(
        <>
        <StackNavigator.Navigator initialRouteName="login" >
            <StackNavigator.Screen name="login" component={Login}  />
        </StackNavigator.Navigator>
        </>
    )
}

export default MainStackNavigator