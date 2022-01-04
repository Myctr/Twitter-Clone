import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {
  logoButton,
  createAccountButton,
  simpleButton,
} from '../styles/componentStyles';

export const LogoButton = props => {
  return (
    <TouchableOpacity style={logoButton.touchableOpacity}>
      <Image source={props.imageSource} style={logoButton.logo} />
      <Text style={logoButton.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export const CreateAccountButton = props => {
  return (
    <TouchableOpacity
      style={createAccountButton.touchableOpacity}
      onPress={props.onPress}>
      <Text style={createAccountButton.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
export const SimpleButton = props => {
  return (
    <View style={[simpleButton.view, {opacity: props.value ? 1 : 0.5}]}>
      <TouchableOpacity
        style={simpleButton.touchableOpacity}
        disabled={!props.value}
        onPress={props.onPress}>
        <Text style={simpleButton.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
