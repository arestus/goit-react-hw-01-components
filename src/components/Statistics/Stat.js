import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Stat = ({ label, percentage }) => (
  <div
    className={styles.statisticsItem}
    style={{ backgroundColor: getRandomColor() }}
  >
    <span className={styles.label}>{label} </span>
    <span className={styles.percentage}> {percentage}%</span>
  </div>
);

Stat.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default Stat;
