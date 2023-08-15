import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Screens/StackScreens/Login"
import SignUp from "../Screens/StackScreens/SignUp";
import ForgotPassword from "../Screens/StackScreens/ForgotPassword";
import { Text } from "react-native";
import OTPVerification from "../Screens/StackScreens/OTPVerification";
import ForgotPasswordVerification from "../Screens/StackScreens/ForgotPasswordVerification";

export type AuthStackNavigatorType={
    login:undefined;
    signUp:undefined;
    forgotPassword:undefined;
    otpVerification:{
        emailId:string
    };
    forgotPasswordOTPVerification:{
        emailID:string;
    }
}
const MainStackNavigator=()=>{
    const StackNavigator=createStackNavigator<AuthStackNavigatorType>()

    return(
        <>
        <StackNavigator.Navigator screenOptions={{headerShown:true}} initialRouteName="login" >
            <StackNavigator.Screen name="login" component={Login} options={{
                headerShown:false
            }}   />
            <StackNavigator.Screen name="signUp" component={SignUp} options={{
                headerTitle:"Sign-up"
            }} />
            <StackNavigator.Screen name="forgotPassword" component={ForgotPassword} options={{
                headerTitle:"Forgot password"
            }}  />
            <StackNavigator.Screen name="otpVerification" component={OTPVerification} options={{
                headerTitle:"OTP Verification"
            }}  />
            <StackNavigator.Screen name="forgotPasswordOTPVerification" component={ForgotPasswordVerification} options={{
                headerTitle:"Change your Password"
            }}  />
        </StackNavigator.Navigator>
        </>
    )
}

export default MainStackNavigator