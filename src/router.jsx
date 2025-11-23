import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { MyExpenses } from "./pages/MyExpenses.jsx";
import { AnalysisPage } from "./pages/AnalysisPage.jsx";

// Главный роутинг приложения
export const AppRouter = () => {
    return (
        // Layout — это общая обёртка (хедер, фон, модалка и т.д.)
        // Всё, что внутри <Layout>, будет отображаться на всех страницах
        <Layout>
            <Routes>
                {/* При заходе на главную "/" — автоматически редиректим на /expenses */}
                <Route path="/" element={<Navigate to="/expenses" replace />} />

                {/* Основная страница — список расходов */}
                <Route path="/expenses" element={<MyExpenses />} />

                {/* Страница с аналитикой */}
                <Route path="/analysis" element={<AnalysisPage />} />

                {/* На всякий случай — если зайти на несуществующий путь */}
                {/* Можно добавить: */}
                {/* <Route path="*" element={<Navigate to="/expenses" replace />} /> */}
            </Routes>
        </Layout>
    );
};