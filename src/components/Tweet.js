import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {tweetStyles} from '../styles/componentStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Tweet = props => {
  return (
    <View style={tweetStyles.view}>
      <Image style={tweetStyles.profile} source={props.data.profilePic} />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <Text style={tweetStyles.name}>{props.data.name}</Text>
          <Text style={tweetStyles.username}>{props.data.username}</Text>
          <Text>.</Text>
          <Text style={tweetStyles.username}>{props.data.time}</Text>
          <View style={tweetStyles.dots}>
            <TouchableOpacity>
              <MaterialIcon name="dots-horizontal" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tweetStyles.text}>{props.data.tweet}</Text>
        <Image style={{width: '90%'}} source={props.data.picture} />

        <View style={tweetStyles.tweetTool}>
          <View style={tweetStyles.tool}>
            <TouchableOpacity>
              <MaterialIcon
                style={tweetStyles.toolIcon}
                name="message-outline"
                size={25}
              />
            </TouchableOpacity>

            <Text style={tweetStyles.toolText}>{props.data.mentionNumber}</Text>
          </View>
          <View style={tweetStyles.tool}>
            <TouchableOpacity>
              <AwesomeIcon
                style={tweetStyles.toolIcon}
                name="retweet"
                size={25}
                light
              />
            </TouchableOpacity>

            <Text style={tweetStyles.toolText}>{props.data.retweetNumber}</Text>
          </View>
          <View style={tweetStyles.tool}>
            <TouchableOpacity>
              <MaterialIcon
                style={tweetStyles.toolIcon}
                name="heart-outline"
                size={25}
              />
            </TouchableOpacity>

            <Text style={tweetStyles.toolText}>{props.data.likeNumber}</Text>
          </View>
          <View style={tweetStyles.tool}>
            <TouchableOpacity>
              <Ionicons name="ios-share-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Tweet;
