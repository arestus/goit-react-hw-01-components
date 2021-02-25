import React from 'react';
import propTypes from 'prop-types';
import styles from './Profile.module.css';

console.log(styles);

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.lists}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}> {followers}</span>
      </li>
      <li className={styles.lists}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}> {views}</span>
      </li>
      <li className={styles.lists}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}> {likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: propTypes.string,
  tag: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
};

export default Profile;
