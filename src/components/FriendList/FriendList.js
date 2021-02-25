import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <div className={styles.friendStyle}>
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
