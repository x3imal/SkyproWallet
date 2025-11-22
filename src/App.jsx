import './App.css';
import {Layout} from "./pages/MainPage.jsx";
import {ExpensesChartModal} from "./components/ExpensesChartModal/ExpensesChartModal.jsx";
import {AnalysisPage} from "./pages/AnalysisPage.jsx";

function App() {
  return (
    <>
      <Layout>
          <AnalysisPage />
      </Layout>
    </>
  );
}

export default App;
