import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.jsx';
import { MyExpensesPage } from './pages/MyExpenses.jsx';
import { AnalysisPage } from './pages/Analysis.jsx';
import { LayoutPage } from './pages/Layout.jsx';

// Главный роутинг приложения
export const AppRouter = () => {
  return (
    // Layout — это общая обёртка (хедер, фон, модалка и т.д.)
    // Всё, что внутри <Layout>, будет отображаться на всех страницах
    <Routes>
      {/* При заходе на главную "/" — автоматически редиректим Layout*/}
      <Route path="/" element={<LayoutPage />}>
        {/* Основная страница — список расходов */}
        <Route path="/expenses" element={<MyExpensesPage/>}/>
        {/* Страница с аналитикой */}
        <Route path="/analysis" element={<AnalysisPage/>}/>
      </Route>

      {/* На всякий случай — если зайти на несуществующий путь */}
      {/* Можно добавить: */}
      {/* <Route path="*" element={<Navigate to="/expenses" replace />} /> */}
    </Routes>
  );
};
