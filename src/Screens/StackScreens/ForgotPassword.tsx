import { StackNavigationProp } from '@react-navigation/stack';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackNavigatorType } from '../../MainStackNavigator/MainStackNavigator';
import { useNavigation } from '@react-navigation/native';

type Props=StackNavigationProp<AuthStackNavigatorType,'forgotPassword'>

const ForgotPassword = () => {

  const navigation=useNavigation<Props>()
  return (
    <>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordHeaderText} >Forgot Password ?</Text>
          <TextInput
            style={styles.textInputCommonStyle}
            placeholder="Enter your email Id"
          />
          <Pressable style={styles.sentOTPPressable} onPress={()=>navigation.navigate("forgotPasswordOTPVerification",{emailID:"subramaniyanmarimuth115@gmail.com"})} >
            <Text style={styles.sentOTPButton} >
                Sent OTP
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor:"#fff",
    paddingBottom: 30,
    paddingTop: 30,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:20
  },
  forgotPasswordHeaderText: {
    color: '#454C73',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInputCommonStyle: {
    borderColor: '#000',
    width: '90%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
  },
  sentOTPPressable: {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
    textAlign: 'center',
  },
  sentOTPButton:{
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#454C73',
    color: '#fff',
    width: '100%',
    padding: 8,
    textAlign: 'center',
  }
});
