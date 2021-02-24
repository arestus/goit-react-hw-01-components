import React from "react";
import PropTypes from "prop-types";
import Stat from "./Stat";

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    {title && <h2>{title}</h2>}
    <ul>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <Stat label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
