import React from "react";
import propTypes from "prop-types";

const Stat = ({ label, percentage }) => (
  <div>
    <span className="label">{label} </span>
    <span className="percentage"> {percentage}%</span>
  </div>
);

Stat.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

export default Stat;
