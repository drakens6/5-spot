import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ToucahbleOpacity
} from 'react-native';
import Image from 'react-native-scalable-image';
import { WebBrowser, Icon } from 'expo';

import { MonoText } from '../components/StyledText';
const { height, width } = Dimensions.get("window");
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Games',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
       
          
        <View style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
          width: '100%',
          padding: 20
        }}
        >
        
        
      <TouchableOpacity onPress={() => navigate("GameDetail")}>
        
      
        <View  style={styles.nav}>
      <Image
              source={
                require('../assets/images/game4.png')
              }
              width={width * .9}
              style={{
                width:'100%'
                
              }}
            />
      </View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("GameDetail")}>
        <View style={styles.nav}><Image
      source={
        require('../assets/images/game2.png')
      }
      width={width * .9}
      style={{
        width:'100%'
      }}
    /></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("GameDetail")}>
        <View  style={styles.nav}><Image
      source={
        require('../assets/images/game3.png')
      }
      width={width * .9}
      style={{
        width:'100%'
      }}
    /></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("GameDetail")}>
        <View style={styles.nav}><Image
      source={
        require('../assets/images/game4.png')
      }
      width={width * .9}
      style={{
        width:'100%'
      }}
    /></View></TouchableOpacity>
        </View>
          
      </View>
    );
  }
}

const shadesOfBlue = [ '#214FE6',
'#708DEC',
'#486DE9',
'#093BE0',
'#082B9C'
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: shadesOfBlue[0],
    color: '#fff'
  },
    backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
    },
    nav: {
      height: 100,
      width: '100%',
      borderColor: shadesOfBlue[4],
      borderWidth: 1,
      marginBottom: 30,
      backgroundColor: shadesOfBlue[1],
      borderRadius: 5
    },
    navText: {
      color: 'white',
      alignSelf: 'flex-end',
      fontSize: 30,
      position: 'absolute',
      right: 20,
      top: 30
    },
    icons: {
      height: '100%',
      width: 100,
      marginLeft: 20,
      marginTop: 10
    }
});

