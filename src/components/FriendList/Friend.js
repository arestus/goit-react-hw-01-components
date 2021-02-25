import React from 'react';
import propTypes from 'prop-types';
import styles from './FriendList.module.css';

const Friend = ({ avatar, name, isOnline }) => (
  <div className={styles.friendCard}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </div>
);

Friend.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};

export default Friend;
