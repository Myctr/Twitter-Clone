import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '../styles/componentStyles';

export const WelcomeHeader = props => {
  return (
    <View style={headerStyles.welcomeView}>
      <Text style={headerStyles.welcomeText}>{props.title}</Text>
    </View>
  );
};

export const Header = props => {
  return (
    <View style={headerStyles.view}>
      <Text style={headerStyles.text}>{props.title}</Text>
    </View>
  );
};
