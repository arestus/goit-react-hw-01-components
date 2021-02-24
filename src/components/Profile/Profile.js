import React from "react";
import propTypes from "prop-types";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
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
