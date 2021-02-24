import React from "react";
import propTypes from "prop-types";

const Friend = ({ avatar, name, isOnline }) => (
  <div>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </div>
);

Friend.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};

export default Friend;
