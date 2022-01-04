import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {textInputs} from '../styles/componentStyles';

export const StartTextInput = props => {
  return (
    <View style={textInputs.view}>
      <TextInput
        style={[textInputs.textInput, {color: props.color}]}
        placeholder={props.placeholder}
        placeholderTextColor="#000000"
        onFocus={props.onFocus}
        onEndEditing={props.onEndEditing}
        onChangeText={props.setValue}
        onPress={props.onPress}
        value={props.value}
        editable={props.editable}
      />
      <Icon
        style={[textInputs.icon, {opacity: props.value ? 1 : 0}]}
        name={props.iconName}
        size={props.iconSize}
        onPress={props.onPress}
        color={props.iconColor}
        solid={props.solid}
        regular={props.regular}
      />
    </View>
  );
};

export const LoginTextInput = props => {
  return (
    <View style={textInputs.view}>
      <TextInput
        style={[textInputs.textInput, {color: '#000000'}]}
        editable={false}
        value={props.value}
      />
    </View>
  );
};
export const PasswordTextInput = props => {
  return (
    <View style={textInputs.view}>
      <TextInput
        style={textInputs.textInput}
        placeholder={props.placeholder}
        placeholderTextColor="#000000"
        secureTextEntry={props.visibility}
        onChangeText={props.setValue}
        value={props.value}
        onFocus={props.onFocus}
        onEndEditing={props.onEndEditing}
      />
    </View>
  );
};
