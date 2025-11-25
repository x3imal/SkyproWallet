import { useCallback, useEffect, useState } from 'react';
import { fetchTransactions } from '../api/transactions';
import { useAuth } from './AuthContext';
import { TransactionContext } from './TransactionContext';

export const TransactionProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const { token } = useAuth();

  const getTransactions = useCallback(async () => {
    try {
      const data = await fetchTransactions({
        token,
      });
      if (data) setExpenses(data);
    } catch (err) {
      console.log(err.message);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTransactions();
    }
  }, [getTransactions, token]);

  return (
    <TransactionContext.Provider
      value={{
        expenses,
        getTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
