import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackNavigatorType } from '../../MainStackNavigator/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext, AuthContextType } from '../../Context/AuthContextWrapper';
import {useContext, useState} from 'react'
import EyeClosed from '../../assets/Images/eye-closed.svg';
import EyeOpened from '../../assets/Images/eye.svg';

type Props = StackNavigationProp<AuthStackNavigatorType,'login'>

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation=useNavigation<Props>()
  const {login}=useContext<AuthContextType>(AuthContext)
  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <>
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <View style={styles.loginContainer}>
          <View style={styles.loginHeaderContainer}>
            <Text style={styles.loginHeaderText}>Welcome</Text>
          </View>
          <TextInput
            style={styles.textInputCommonStyle}
            placeholder="Enter your email Id"
          />
           <View style={styles.passwordCommonViewStyle}>
          <TextInput
            style={styles.passwordTypeInput}
            placeholder="Enter Password"
            secureTextEntry={showPassword ? false : true}
          />
          <Pressable onPress={handleShowPassword}>
            {showPassword ? <EyeOpened /> : <EyeClosed />}
          </Pressable>
        </View>
          <Pressable onPress={()=>navigation.navigate("forgotPassword")} style={styles.forgotPasswordPressable}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </Pressable>
          <Pressable onPress={login} style={styles.loginPressable}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <View style={styles.signUpContainer}>
            <Text>Don't have an account ?</Text>
            <Pressable onPress={()=>navigation.navigate("signUp")} >
              <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 5,
    paddingRight: 5,
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    shadowColor: '#000',  
  },
  loginHeaderContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  loginHeaderText: {
    color: '#454C73',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputCommonStyle: {
    borderColor: '#000',
    width: '90%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
  },
  forgotPasswordPressable: {
    display: 'flex',
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginPressable: {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
    textAlign: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#454C73',
    color: '#fff',
    width: '100%',
    padding: 8,
    textAlign: 'center',
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  passwordCommonViewStyle: {
    borderColor: '#000',
    width: '90%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordTypeInput: {
    width: '90%',
    height: '100%',
  },
});
