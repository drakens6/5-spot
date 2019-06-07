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
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
       
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            height: 10,
            marginBottom: 70,
            marginTop: 10
          }}>
           
            <Image
              source={
                require('../assets/images/logo.png')
              }
              height={100}
              width={100}
              style={{marginRight:10, marginTop: '8%'}}
            />
          </View>
          <View style={{
          width: '100%',
          height: 200
        }
        }></View>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '60%',
          width: '100%',
          padding: 20
        }}
        >
        
        
      <TouchableOpacity onPress={() => navigate("Games")}>
        
      
        <View  style={styles.nav}><Icon.Ionicons
        name="logo-game-controller-b"
        size={80}
        style={styles.icons}
        color="#FFFFFF"
      /><Text style={styles.navText}>Games</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Winnings")}>
        <View style={styles.nav}><Icon.Ionicons
        name="md-trophy"
        size={80}
        style={styles.icons}
        color="#FFFFFF"
      /><Text style={styles.navText}>Prizes Won</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Videos")}>
        <View  style={styles.nav}><Icon.Ionicons
        name="md-play-circle"
        size={80}
        style={styles.icons}
        color="#FFFFFF"
      /><Text style={styles.navText}>Videos</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Settings")}>
        <View style={styles.nav}><Icon.Ionicons
        name="md-star-outline"
        size={80}
        style={styles.icons}
        color="#FFFFFF"
      /><Text style={styles.navText}>Brand Contests</Text></View></TouchableOpacity>
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