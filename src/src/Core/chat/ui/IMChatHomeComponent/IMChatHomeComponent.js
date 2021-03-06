import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';

import { SearchBarAlternate } from '../../..';
import { IMUserSearchModal } from '../../../socialgraph/friendships';
import { TNStoriesTray } from '../../../truly-native';
import dynamicStyles from './styles';
import { useColorScheme } from 'react-native-appearance';
import { IMConversationListView } from '../..';
import { IMLocalized } from '../../../localization/IMLocalization';
import IMAudioVideoChat from '../../audioVideo/IMAudioVideoChat';

function IMChatHomeComponent(props) {
  const {
    friends,
    onSearchBarPress,
    onSearchTextChange,
    isSearchModalOpen,
    onSearchModalClose,
    searchData,
    onSearchBarCancel,
    onFriendItemPress,
    searchBarRef,
    onFriendAction,
    onSearchClear,
    navigation,
    appStyles,
    onSenderProfilePicturePress,
    onEmptyStatePress,
    followEnabled,
    audioVideoChatConfig,
  } = props;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const emptyStateConfig = {
    title: IMLocalized('No Conversations'),
    description: IMLocalized(
      'Add some friends and start chatting with them. Your conversations will show up here.',
    ),
    buttonName: IMLocalized('Add friends'),
    onPress: onEmptyStatePress,
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBarAlternate
            onPress={onSearchBarPress}
            placeholderTitle={IMLocalized('Search for friends')}
            appStyles={appStyles}
          />
        </View>
        <TNStoriesTray
          onStoryItemPress={onFriendItemPress}
          storyItemContainerStyle={styles.userImageContainer}
          data={friends}
          displayLastName={false}
          appStyles={appStyles}
          showOnlineIndicator={true}
        />
        <View style={styles.chatsChannelContainer}>
          <IMConversationListView
            navigation={navigation}
            appStyles={appStyles}
            emptyStateConfig={emptyStateConfig}
          />
        </View>
      </ScrollView>
      <IMUserSearchModal
        onSearchBarCancel={onSearchBarCancel}
        onSearchClear={onSearchClear}
        data={searchData}
        onFriendItemPress={onFriendItemPress}
        onSearchTextChange={onSearchTextChange}
        onAddFriend={onFriendAction}
        isModalOpen={isSearchModalOpen}
        onClose={onSearchModalClose}
        searchBarRef={searchBarRef}
        appStyles={appStyles}
        followEnabled={followEnabled}
      />
      {audioVideoChatConfig && <IMAudioVideoChat {...audioVideoChatConfig} />}
    </View>
  );
}

IMChatHomeComponent.propTypes = {
  onSearchClear: PropTypes.func,
  onFriendItemPress: PropTypes.func,
  onFriendAction: PropTypes.func,
  onSearchBarPress: PropTypes.func,
  onSearchBarCancel: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  onSearchModalClose: PropTypes.func,
  channels: PropTypes.array,
  searchData: PropTypes.array,
  isSearchModalOpen: PropTypes.bool,
  searchBarRef: PropTypes.object,
};

export default IMChatHomeComponent;
