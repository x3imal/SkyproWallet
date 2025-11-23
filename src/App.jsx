// src/App.jsx
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
