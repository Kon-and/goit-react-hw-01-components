import PropTypes from 'prop-types';

import { FriendsItem } from './friendItem';
import { FriendsList } from './friend.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
