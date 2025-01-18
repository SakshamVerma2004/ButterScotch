import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLastScreen = () => {
    navigation.navigate('Last');
  };
  return (
    <ImageBackground
      source={require('./home.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Nature's Serenity</Text>
          <Text style={styles.description}>
            Immerse yourself in the tranquil beauty of nature, where lush trees
            sway gently in the breeze beneath a vast, open sky. The vibrant
            colors and soothing sounds create a peaceful atmosphere, inviting
            you to pause and appreciate the wonders around you. Take a moment to
            breathe deeply, connect with the environment, and let the serenity
            of this picturesque landscape rejuvenate your spirit. Embrace the
            harmony of nature as you explore this enchanting scene.
          </Text>
          <Text style={styles.description}>
            Ready to explore more? Click the button below to move forward and
            discover new adventures waiting for you. Each page offers unique
            experiences and surprises that will keep you engaged and inspired.
            Don’t miss out on what lies ahead—let's dive into the next chapter
            together!
          </Text>
          <Text style={styles.description}>
            Embark on an Exciting Adventure Filled with Surprises and
            Discoveries Awaiting You
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleLastScreen}>
            <Text style={styles.buttonText}>Continue your Journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 3,
  },
  button: {
    backgroundColor: '#038387',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
