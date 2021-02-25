import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => (
  <div>
    <table className={styles.stransactionSection}>
      <thead>
        <tr className={styles.transactionHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <Transaction type={type} amount={amount} currency={currency} />
        </tbody>
      ))}
    </table>
  </div>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
