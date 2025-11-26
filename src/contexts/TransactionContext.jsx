import { createContext, useCallback, useEffect, useState } from "react";
import { fetchTransactions } from "../api/transactions";
import { useAuth } from "./AuthContext.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const { token } = useAuth();

  const getTransactions = useCallback(async () => {
    try {
      const data = await fetchTransactions({ token });
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
