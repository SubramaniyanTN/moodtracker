import { RouteProp, useRoute } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthStackNavigatorType } from '../../MainStackNavigator/MainStackNavigator';
import EyeClosed from '../../assets/Images/eye-closed.svg';
import EyeOpened from '../../assets/Images/eye.svg';
import { useState } from 'react';

const ForgotPasswordVerification = () => {
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showReEnteredPassword, setShowReEnteredPassword] =
    useState<boolean>(false);
  const { emailID } =
    useRoute<
      RouteProp<AuthStackNavigatorType, 'forgotPasswordOTPVerification'>
    >().params;
  const handleShowPassword = () => {
    setShowNewPassword(prev => !prev);
  };
  const handleShowReEnteredPassword = () => {
    setShowReEnteredPassword(prev => !prev);
  };
  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      <View style={styles.mainBoxContainer}>
        <Text style={styles.headerTextContent}>OTP sent to {emailID}</Text>
        <TextInput
          style={styles.textInputCommonStyle}
          placeholder="Enter OTP"
        />
        <View style={styles.passwordCommonViewStyle}>
          <TextInput
            style={styles.passwordTypeInput}
            placeholder="Enter New Password"
            secureTextEntry={showNewPassword ? false : true}
          />
          <Pressable onPress={handleShowPassword}>
            {showNewPassword ? <EyeOpened /> : <EyeClosed />}
          </Pressable>
        </View>
        <View style={styles.passwordCommonViewStyle}>
          <TextInput
            style={styles.passwordTypeInput}
            placeholder="Enter New Password"
            secureTextEntry={showReEnteredPassword ? false : true}
          />
          <Pressable onPress={handleShowReEnteredPassword}>
            {showReEnteredPassword ? <EyeOpened /> : <EyeClosed />}
          </Pressable>
        </View>
        <View style={styles.bottomOTPVerificationButton}>
          <Pressable style={styles.OTPVerificationButtonPressable}>
            <Text style={styles.OTPVerificationButtonText}>
              Click to Verify
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordVerification;

const styles = StyleSheet.create({
  safeAreaViewStyles: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBoxContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 30,
    gap: 13,
  },
  headerTextContent: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
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
  bottomOTPVerificationButton: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
  },
  OTPVerificationButtonPressable: {
    backgroundColor: '#454C73',
    width: '50%',
    padding: 10,
  },
  OTPVerificationButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
