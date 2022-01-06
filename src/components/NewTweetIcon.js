import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const NewTweetIcon = props => {
  return (
    <View style={{position: 'absolute', right: 20, bottom: 15}}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="pluscircle" size={65} color={'#1DA1F2'} />
      </TouchableOpacity>
    </View>
  );
};
export default NewTweetIcon;
