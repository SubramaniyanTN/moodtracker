import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import EyeClosed from '../../assets/Images/eye-closed.svg';
import EyeOpened from '../../assets/Images/eye.svg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <View style={styles.SignUpBoxContainer}>
        <Text style={styles.signUpHeader}>Signup</Text>
        <TextInput
          style={styles.textInputCommonStyle}
          placeholder="Enter your First Name"
        />
        <TextInput
          style={styles.textInputCommonStyle}
          placeholder="Enter your Last Name"
        />
        <View style={styles.passwordCommonViewStyle}>
          <TextInput
            style={styles.passwordTypeInput}
            placeholder="Password"
            secureTextEntry={showPassword ? false : true}
          />
          <Pressable onPress={handleShowPassword}>
            {showPassword ? <EyeOpened /> : <EyeClosed />}
          </Pressable>
        </View>
        <View style={styles.passwordCommonViewStyle}>
          <TextInput
            style={styles.passwordTypeInput}
            placeholder="Confirm Password"
            secureTextEntry={showConfirmPassword ? false : true}
          />
          <Pressable onPress={handleShowConfirmPassword}>
            {showConfirmPassword ? <EyeOpened /> : <EyeClosed />}
          </Pressable>
        </View>
        <View style={styles.bottomSignUpButton} >
          <Pressable style={styles.SignUpButtonPressable} ><Text style={styles.SignUpButtonText} >Sign up</Text></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpBoxContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    paddingTop: 40,
    paddingBottom: 40,
    gap: 20,
    alignItems: 'center',
  },
  signUpHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputCommonStyle: {
    borderColor: '#000',
    width: '90%',
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
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
  bottomSignUpButton:{
    width:"90%",
    display:"flex",
    alignItems:"center"
  },
  SignUpButtonPressable:{
    backgroundColor:"#454C73",
    width:"30%",
    padding:10,
  },
  SignUpButtonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"600"
  }
});
