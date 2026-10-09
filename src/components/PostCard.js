import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from './Avatar';
import VerifiedBadge from './VerifiedBadge';
import {useTheme} from '../theme';

const formatCount = value => {
  if (value === undefined || value === null) {
    return '';
  }
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return String(value);
};

const PostCard = ({post, onPress}) => {
  const {colors, spacing, typography} = useTheme();
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);

  const likeCount = (post.likeNumber || 0) + (liked ? 1 : 0);
  const repostCount = (post.retweetNumber || 0) + (reposted ? 1 : 0);

  const actions = [
    {
      accessibilityLabel: 'Reply',
      color: colors.textMuted,
      count: post.replyNumber,
      icon: 'chatbubble-outline',
      onPress: undefined,
    },
    {
      accessibilityLabel: 'Repost',
      color: reposted ? colors.repost : colors.textMuted,
      count: repostCount,
      icon: 'repeat-outline',
      onPress: () => setReposted(current => !current),
    },
    {
      accessibilityLabel: 'Like',
      color: liked ? colors.like : colors.textMuted,
      count: likeCount,
      icon: liked ? 'heart' : 'heart-outline',
      onPress: () => setLiked(current => !current),
    },
    {
      accessibilityLabel: 'Views',
      color: colors.textMuted,
      count: post.viewNumber,
      icon: 'stats-chart-outline',
      onPress: undefined,
    },
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.container,
        {
          borderBottomColor: colors.border,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.md,
        },
      ]}>
      <Avatar name={post.name} size={40} source={post.profilePic} />
      <View style={[styles.content, {marginLeft: spacing.md}]}>
        <View style={styles.metaRow}>
          <Text
            numberOfLines={1}
            style={[typography.bodyStrong, {color: colors.text}]}>
            {post.name}
          </Text>
          {post.verified ? <VerifiedBadge /> : null}
          <Text
            numberOfLines={1}
            style={[typography.meta, styles.handle, {color: colors.textMuted}]}>
            {post.username}
          </Text>
          <Text style={[typography.meta, {color: colors.textMuted}]}>
            · {post.time}
          </Text>
          <View style={styles.metaSpacer} />
          <Ionicons
            color={colors.textMuted}
            name="ellipsis-horizontal"
            size={18}
          />
        </View>

        {post.tweet ? (
          <Text style={[typography.body, styles.body, {color: colors.text}]}>
            {post.tweet}
          </Text>
        ) : null}

        {post.picture ? (
          <Image
            resizeMode="cover"
            source={post.picture}
            style={[styles.media, {borderColor: colors.border}]}
          />
        ) : null}

        <View style={[styles.actions, {marginTop: spacing.sm}]}>
          {actions.map(action => (
            <TouchableOpacity
              accessibilityLabel={action.accessibilityLabel}
              activeOpacity={0.7}
              disabled={!action.onPress}
              key={action.accessibilityLabel}
              onPress={action.onPress}
              style={styles.action}>
              <Ionicons color={action.color} name={action.icon} size={18} />
              {action.count ? (
                <Text
                  style={[
                    typography.caption,
                    {color: action.color, marginLeft: 6},
                  ]}>
                  {formatCount(action.count)}
                </Text>
              ) : null}
            </TouchableOpacity>
          ))}
          <View style={styles.metaSpacer} />
          <Ionicons
            color={colors.textMuted}
            name="bookmark-outline"
            size={18}
          />
          <Ionicons
            color={colors.textMuted}
            name="share-outline"
            size={18}
            style={styles.share}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  metaSpacer: {
    flex: 1,
  },
  handle: {
    marginLeft: 4,
  },
  body: {
    lineHeight: 20,
    marginTop: 2,
  },
  media: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    height: 220,
    marginTop: 10,
    width: '100%',
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 28,
  },
  share: {
    marginLeft: 12,
  },
});

export default PostCard;
