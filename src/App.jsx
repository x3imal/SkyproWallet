import './App.css';
import {Layout} from "./pages/MainPage.jsx";
import { AuthModal } from './components/AuthModal/AuthModal.jsx';

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
