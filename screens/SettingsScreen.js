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
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Brand Contests',
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
        
        
      <TouchableOpacity onPress={() => navigate("Games")}>
        
      
        <View  style={styles.nav}><Image
              source={
                require('../assets/images/pepsi.png')
              }
              height={90}
              width={100}
              
            /><Text style={styles.navText}>PepsiCo</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Games")}>
        
      
        <View  style={styles.nav}><Image
              source={
                require('../assets/images/sub.png')
              }
              height={90}
              width={100}
              
            /><Text style={styles.navText}>Subway</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Games")}>
        
      
        <View  style={styles.nav}><Image
              source={
                require('../assets/images/doritos.png')
              }
              height={90}
              width={100}
              style={{marginLeft: 5, marginTop: 5}}
            /><Text style={styles.navText}>Doritos</Text></View></TouchableOpacity>
      
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
      marginTop: 10,
      backgroundColor: shadesOfBlue[1],
      borderRadius: 5
    },
    navText: {
      color: 'white',
      alignSelf: 'flex-end',
      fontSize: 30,
      position: 'absolute',
      right: 20,
      top: 30,
      fontWeight: '200'
    },
    icons: {
      height: '100%',
      width: 100,
      marginLeft: 20,
      marginTop: 10
    }
});

const { height } = Dimensions.get("window");