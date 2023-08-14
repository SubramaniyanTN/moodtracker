import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Screens/StackScreens/Login"
import SignUp from "../Screens/StackScreens/SignUp";
import ForgotPassword from "../Screens/StackScreens/ForgotPassword";

export type AuthStackNavigatorType={
    login:undefined;
    signUp:undefined;
    forgotPassword:undefined;
}
const MainStackNavigator=()=>{
    const StackNavigator=createStackNavigator<AuthStackNavigatorType>()

    return(
        <>
        <StackNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="login" >
            <StackNavigator.Screen name="login" component={Login}  />
            <StackNavigator.Screen name="signUp" component={SignUp}  />
            <StackNavigator.Screen name="forgotPassword" component={ForgotPassword}  />
        </StackNavigator.Navigator>
        </>
    )
}

export default MainStackNavigator