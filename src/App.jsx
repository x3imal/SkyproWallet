// src/App.jsx
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { TransactionProvider } from './contexts/TransactionContext.jsx';

function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;
