import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LastScreen = () => {
  const navigation = useNavigation();

  const handleLandingStarted = () => {
    navigation.navigate('Landing');
  };

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Wisdom of Olympias</Text>
        <Text style={styles.subtitle}>
          True knowledge is the foundation of a virtuous life. Embrace the
          pursuit of wisdom and let it illuminate your path.
        </Text>
        <View style={styles.buttonFlexContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLandingStarted}>
            <Text style={styles.buttonText}>Embark Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Retrace Steps</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('./philosopher.jpg')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: 2,
  },
  textContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'PlayfairDisplay',
  },
  button: {
    backgroundColor: '#2C3E50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    textAlign: 'center',
  },
  button2: {
    backgroundColor: '#1E40AF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonFlexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
  },
});

export default LastScreen;
