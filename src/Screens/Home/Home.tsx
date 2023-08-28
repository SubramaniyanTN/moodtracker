import React, { useCallback, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Modal,
  ToastAndroid,
} from 'react-native';
import { MoodOptionsType, moodOptions } from '../../Utils/MoodOptions';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ImageCameraClickComponent,
  ImagePickerComponent,
} from '../../Utils/ImagePicker';
import storage from '@react-native-firebase/storage';

const Home: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>();
  const [selectedMood, setSelectedMood] = useState<MoodOptionsType>();
  const handleSelectedMood = useCallback((selectedMood: MoodOptionsType) => {
    setSelectedMood(selectedMood);
  }, []);

  const imageUpload = async () => {
    try {
      const response = await ImagePickerComponent();
      if (!response || !response[0].uri) return;
      const imageRef = storage().ref(
        `user/${Date.now()}-${response[0].fileName}`,
      );
      const imageUploadResponse = await imageRef.putFile(response[0].uri);
      const imageDownloadURL = await imageRef.getDownloadURL();
      console.log(imageUploadResponse);
      setImage(imageDownloadURL);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(image);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSelectedMood(undefined);
      };
    }, []),
  );
  return (
    <>
      <SafeAreaView style={styles.styleSheetStyle}>
        <View style={styles.mainContainerHome}>
          <Text style={styles.titleStyle}>How are you right now ?</Text>
          <View style={styles.moodOptionsEntireContainer}>
            {moodOptions.map(moodOption => {
              return (
                <Pressable
                  style={styles.moodOptionSingleContainer}
                  key={moodOption.emoji}
                  onPress={() => handleSelectedMood(moodOption)}>
                  <View
                    style={
                      selectedMood?.emoji === moodOption.emoji
                        ? styles.emojiSelectedContainer
                        : styles.emojiNotSelectedContainer
                    }>
                    <Text style={styles.emojiString}>{moodOption.emoji}</Text>
                  </View>
                  <Text style={styles.moodOptionsDescription}>
                    {moodOption.description}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <TextInput style={styles.captionTextInput} placeholder="Caption" />
          <TextInput
            style={styles.descriptionTextInput}
            textAlignVertical="top"
            multiline={true}
            placeholder="What Happened ?"
          />
          {image && (
            <View style={styles.imageViewStyle}>
              <Image source={{ uri: image }} width={150} height={150} />
            </View>
          )}
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.imagePickerButton}>
            <Text style={styles.imagePickerText}>Click to add Images</Text>
          </Pressable>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              ToastAndroid.show('Cancelled', ToastAndroid.SHORT);
              setModalVisible(false);
            }}>
            <View style={styles.bottomView}>
              <View style={styles.modalView}>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={styles.modalCloseButton}>
                  <Text style={styles.closeX}>X</Text>
                </Pressable>
                <Pressable onPress={ImagePickerComponent}>
                  <Text style={styles.modalContentText}>Gallery</Text>
                </Pressable>
                <Pressable onPress={ImageCameraClickComponent}>
                  <Text style={styles.modalContentText}>Camera</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  styleSheetStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
  mainContainerHome: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 3,
    borderColor: '#454C73',
    borderRadius: 3,
    borderWidth: 5,
    gap: 20,
    paddingTop:30,
    paddingBottom:30
  },
  moodOptionsEntireContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  moodOptionSingleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  emojiSelectedContainer: {
    backgroundColor: '#454C73',
    height: 50,
    width: 50,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiNotSelectedContainer: {
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiString: {
    fontSize: 18,
  },
  moodOptionsDescription: {
    fontSize: 10,
    textAlign: 'center',
  },
  captionTextInput: {
    width: '90%',
    borderColor: '#000',
    borderRadius: 3,
    borderWidth: 1,
    alignSelf: 'center',
  },
  descriptionTextInput: {
    width: '90%',
    height: 100,
    borderColor: '#000',
    borderRadius: 3,
    borderWidth: 1,
    alignSelf: 'center',
  },
  imagePickerButton: {
    backgroundColor: '#454C73',
    alignSelf: 'center',
  },
  imagePickerText: {
    color: '#FFFFFF',
    padding: 4,
  },
  imageViewStyle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '30%',
    // zIndex: 1,
    flex: 1,
    bottom: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: '20%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContentText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalCloseButton: {
    width: '80%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  closeX: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Home;
