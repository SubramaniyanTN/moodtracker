import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AuthStackNavigatorType } from '../../MainStackNavigator/MainStackNavigator';

const OTPVerification = () => {
  const { emailId } =
    useRoute<RouteProp<AuthStackNavigatorType, 'otpVerification'>>().params;
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <View style={styles.OTPVerificationContainer}>
        <Text style={styles.otpContent}>OTP send to {emailId}</Text>
        <TextInput
          style={styles.textInputCommonStyle}
          placeholder="Enter OTP"
        />
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

export default OTPVerification;

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OTPVerificationContainer: {
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
    color: '#454C73',
  },
  otpContent: {
    width: '80%',
    padding: 5,
    fontSize: 13,
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
