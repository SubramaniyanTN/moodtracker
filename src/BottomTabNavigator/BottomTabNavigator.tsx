import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import History from "../Screens/History/History";
import Home from "../Screens/Home/Home";
import Analytics from "../Screens/Analytics/Analytics";
import HomeIcon from '../assets/Images/homeicon.svg'
import HistoryIcon from '../assets/Images/history_edu.svg'
import AnalyticsIcon from '../assets/Images/analytics.svg'

const BottomTab=createBottomTabNavigator<{
    Home:undefined;
    History:undefined;
    Analytics:undefined;
}>();
const BottomTabNavigator=()=>{
    return(
        <BottomTab.Navigator initialRouteName="Home" screenOptions={(props)=>{
            if(props.route.name==="Home"){
                return {
                    tabBarIcon:()=><HomeIcon />,
                    tabBarHideOnKeyboard:true,
                }
            }else if(props.route.name==="History"){
                return {
                    tabBarIcon:()=><HistoryIcon />,
                    tabBarHideOnKeyboard:true
                }
            }else if(props.route.name==="Analytics"){
                return {
                    tabBarIcon:()=><AnalyticsIcon />,
                    tabBarHideOnKeyboard:true
                }
            }
            return {

            }
        }} >
            <BottomTab.Screen name="Home"  component={Home} />
            <BottomTab.Screen name="History" component={History} />
            <BottomTab.Screen name="Analytics" component={Analytics} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator;