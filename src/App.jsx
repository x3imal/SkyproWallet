import './App.css';
import {Layout} from "./pages/MainPage.jsx";
import { ExpenseTable } from './components/ExpenseTable.jsx';


function App() {
  return (
    <>
      <Layout />
      <AuthModal
      modal="login"
      onClose={() => {}}
      />
    </>
  );
}

export default App;
