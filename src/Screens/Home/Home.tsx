import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { MoodOptionsType, moodOptions } from '../../Utils/MoodOptions';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImagePickerComponent } from '../../Utils/ImagePicker';

const Home: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionsType>();
  const handleSelectedMood = useCallback((selectedMood: MoodOptionsType) => {
    setSelectedMood(selectedMood);
  }, []);

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
          <Pressable
            onPress={ImagePickerComponent}
            style={styles.imagePickerButton}>
            <Text style={styles.imagePickerText}>Click to add Images</Text>
          </Pressable>
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
});

export default Home;
