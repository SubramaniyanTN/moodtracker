import  {launchImageLibrary, ImagePickerResponse ,Asset} from 'react-native-image-picker';
import { ToastAndroid } from 'react-native';
import { err } from 'react-native-svg/lib/typescript/xml';

export const ImagePickerComponent = async ():Promise<Asset[] | undefined>=> {
 try {
    const imageResponse: ImagePickerResponse =
    await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
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
    console.log(imageResponse.assets)
    return imageResponse.assets;
  }
 } catch (error) {
    console.log(error)
 }
};
