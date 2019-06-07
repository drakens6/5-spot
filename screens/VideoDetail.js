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
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.container}>
        
        
        
      <TouchableOpacity  onPress={() => {
        alert('A new contest is starting! By continuing, you agree to the Terms and Conditions.')
        navigate("ContestGame")
      }}>
        
      
      <Image
                source={
                  require('../assets/images/video4.jpg')
                }
                height={height}
                style={{height:'100%', width:'100%'}}
              />
        </TouchableOpacity>
        <Icon.Ionicons
        name="md-play-circle"
        size={80}
        style={styles.icons}
        color="#FFFFFF"
      />
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
      width: 100,
      position: 'absolute',
      bottom: 100,
      left: '42%'
    }
});

