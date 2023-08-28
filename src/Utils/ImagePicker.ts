import {
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
  launchCamera,
  CameraType,
} from 'react-native-image-picker';
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import { err } from 'react-native-svg/lib/typescript/xml';

export const ImagePickerComponent = async (): Promise<Asset[] | undefined> => {
  try {
    const imageResponse: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      selectionLimit: 1,
    });
    if (imageResponse.didCancel) {
      ToastAndroid.show('Image selection cancelled', ToastAndroid.SHORT);
    } else if (imageResponse.errorMessage) {
      ToastAndroid.show(imageResponse.errorMessage, ToastAndroid.SHORT);
    } else if (imageResponse.errorCode) {
      switch (imageResponse.errorCode) {
        case 'camera_unavailable':
          ToastAndroid.show('Camera is not available', ToastAndroid.SHORT);
          break;
        case 'permission':
          ToastAndroid.show(
            'Please provide the neccessary permissions to access Media',
            ToastAndroid.SHORT,
          );
          break;
        case 'others':
          ToastAndroid.show(
            'Something went wrong , please try again later',
            ToastAndroid.SHORT,
          );
          break;
      }
    } else if (imageResponse.assets) {
      return imageResponse.assets;
    }
  } catch (error) {
    console.log(error);
  }
};

export const ImageCameraClickComponent = async (
  cameraType: CameraType,
): Promise<Asset[] | undefined> => {
  console.log('TRIGGERED');
  try {
    const permissions = await PermissionsAndroid.request(
      'android.permission.CAMERA',
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (permissions === 'denied') {
      ToastAndroid.show('Permission Denied', ToastAndroid.SHORT);
      return;
    } else if (permissions === 'never_ask_again') {
      ToastAndroid.show('Permission Denied', ToastAndroid.SHORT);
      return;
    } else if (permissions === 'granted') {
      const imageCameraResponse: ImagePickerResponse = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: cameraType,
      });
      if (imageCameraResponse.didCancel) {
        ToastAndroid.show('Camera cancelled', ToastAndroid.SHORT);
        return;
      } else if (imageCameraResponse.errorCode) {
        switch (imageCameraResponse.errorCode) {
          case 'camera_unavailable':
            ToastAndroid.show('Camera is not available', ToastAndroid.SHORT);
            break;
          case 'permission':
            ToastAndroid.show(
              'Please provide the neccessary permissions to access Media',
              ToastAndroid.SHORT,
            );
            break;
          case 'others':
            console.log(
              'imageCameraResponse.errorMessage',
              imageCameraResponse.errorMessage,
            );
            ToastAndroid.show(
              'Something went wrong , please try again later',
              ToastAndroid.SHORT,
            );
            break;
        }
        return;
      } else if (imageCameraResponse.assets) {
        return imageCameraResponse.assets;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
