import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import NavBar, {NavGroup} from 'react-native-nav';
import {cancelBar} from '../styles/componentStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const CancelBar = props => {
  return (
    <NavBar style={cancelBar}>
      <NavGroup>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={cancelBar.navTitle}>Cancel</Text>
        </TouchableOpacity>
      </NavGroup>
    </NavBar>
  );
};
export const ReturnBar = props => {
  return (
    <NavBar style={cancelBar}>
      <NavGroup>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="chevron-left" color="#1DA1F2" size={24} light />
        </TouchableOpacity>
      </NavGroup>
    </NavBar>
  );
};
