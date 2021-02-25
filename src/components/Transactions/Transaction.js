import React from 'react';
import propTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr>
    <td className={styles.tableContent}>{type}</td>
    <td className={styles.tableContent}>{amount}</td>
    <td className={styles.tableContent}>{currency}</td>
  </tr>
);

Transaction.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default Transaction;
