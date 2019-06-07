import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GamesScreen from '../screens/GamesScreen';
import VideosScreen from '../screens/VideosScreen';
import WinningsScreen from '../screens/WinningsScreen';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const components = [
  {
    component: HomeScreen,
    icon: 'md-home',
    tabBarLabel: 'Home',

  },
  {
    component: GamesScreen,
    icon: 'logo-game-controller-b',
    tabBarLabel: 'Games',

  },
  {
    component: WinningsScreen,
    icon: 'md-trophy',
    tabBarLabel: 'Prizes Won',

  },
  {
    component: VideosScreen,
    icon: 'md-play-circle',
    tabBarLabel: 'Videos',

  },
  {
    component: SettingsScreen,
    icon: 'md-star-outline',
    tabBarLabel: 'Contests',

  },

]
const stacks = {}
components.forEach((item) => {
  let stack = createStackNavigator({
    [item.tabBarLabel]: item.component,
  })
  stack.navigationOptions = {
    tabBarLabel: item.tabBarLabel,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `${item.icon}`
            : `${item.icon}`
        }
      />
    )
  }
  stacks[item.tabBarLabel] = stack
})

export default createBottomTabNavigator(stacks);
