import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { MyExpenses } from "./pages/MyExpenses.jsx";
import { AnalysisPage } from "./pages/AnalysisPage.jsx";
import { AuthModal } from "./components/AuthModal/AuthModal.jsx";
import {Layout} from "./components/Layout/Layout.jsx";

function App() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* редирект с корня на /expenses */}
                    <Route path="/" element={<Navigate to="/expenses" replace />} />
                    <Route path="/expenses" element={<MyExpenses />} />
                    <Route path="/analysis" element={<AnalysisPage />} />
                </Routes>
            </Layout>

            {isAuthOpen && (
                <AuthModal
                    mode={authMode}
                    onClose={() => setIsAuthOpen(false)}
                    onModeChange={setAuthMode}
                />
            )}
        </BrowserRouter>
    );
}

export default App;
