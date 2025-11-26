import { createContext } from "react";

// Создаём контекст для взаимодействия с расходами — через него все компоненты будут получать данные о расходах
export const TransactionContext = createContext(null);