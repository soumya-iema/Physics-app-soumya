import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SuccessMessage({navigation}) {
  function startLearning(){
    navigation.navigate('LandingPage')
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageSection}>
          <Image source={require('../assets/cong.png')}></Image>
        </View>
        <View style={styles.textWrapper}>
          <View>
            <Text style={styles.congratulationText}>Congratulations!</Text>
          </View>
          <View>
            <Text style={styles.successfullyRegisteredText}>Now you are successfully registered.</Text>
          </View>
        </View>
        <View style={styles.startLearningButtonWrapper}>
          <TouchableOpacity onPress={startLearning} style={styles.startLearningButton}>
            <Text style={styles.startLearningText}>Start Learning!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    padding: 45
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    // marginTop: 100
  },imageSection:{
    margin: 50
  },
  textWrapper:{
    gap: 20
  }
  ,
  congratulationText: {
    color: '#2419A0',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  successfullyRegisteredText: {
    color: '#2419A0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  startLearningButtonWrapper: {
    paddingTop: 50
  },
  startLearningButton: {
    backgroundColor: '#2419A0',
    borderColor: '#2419A0',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 2,
    width: 300,
    height: 54,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  startLearningText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    
  }
})