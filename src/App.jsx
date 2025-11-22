import './App.css';
import {Layout} from "./pages/MainPage.jsx";
import { ExpenseTable } from './components/ExpenseTable.jsx';

function App() {
  return (
    <>
      <Layout>
        <ExpenseTable />
      </Layout>
    </>
  );
}

export default App;
