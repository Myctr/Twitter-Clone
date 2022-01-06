import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import NavBar, {NavGroup} from 'react-native-nav';
import {cancelBar, dualGroupBar} from '../styles/componentStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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

export const DualGroupBar = props => {
  return (
    <NavBar style={dualGroupBar}>
      <NavGroup>
        <TouchableOpacity onPress={props.profileOnPress}>
          <Image style={dualGroupBar.profile} source={props.profile} />
        </TouchableOpacity>
      </NavGroup>
      <NavGroup>
        <TouchableOpacity onPress={props.secondOnPress}>
          <MaterialIcon name={props.iconName} color="#1DA1F2" size={24} />
        </TouchableOpacity>
      </NavGroup>
    </NavBar>
  );
};
