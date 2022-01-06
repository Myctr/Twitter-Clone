import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from '../../styles/homeStyles';
import {DualGroupBar} from '../../components/Navbar';
import Logo from '../../components/Logo';
import Tweet from '../../components/Tweet';
import NewTweetIcon from '../../components/NewTweetIcon';

import me from '../../assets/images/me.jpg';
import data from '../../data';

const Home = props => {
  const [tweetModal, setTweetModal] = useState(false);
  const [tweetValue, setTweetValue] = useState('');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <DualGroupBar
        profile={me}
        iconName={'star-four-points'}
        profileOnPress={() => {
          setSide(!side);
        }}
      />
      <Logo />
      <ScrollView>
        {data.map(tweet => (
          <Tweet key={tweet.id} data={tweet} />
        ))}
      </ScrollView>
      <NewTweetIcon
        onPress={() => {
          setTweetModal(true);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
