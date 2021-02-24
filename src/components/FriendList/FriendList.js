import React from "react";
import PropTypes from "prop-types";
import Friend from "./Friend";

const FriendList = ({ friends }) => (
  <div>
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <Friend avatar={avatar} name={name} status={isOnline} />
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
