import { Item, Status, Avatar, Name } from './friend.styled';

export const FriendsItem = ({ avatar, isOnline, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
