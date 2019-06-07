import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import VideoDetail from '../screens/VideoDetail'
import GameDetail from '../screens/GameDetail'
import ContestGame from '../screens/ContestGame'
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  GameDetail: GameDetail,
  VideoDetail: VideoDetail,
  ContestGame: ContestGame
});