import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/Logo.svg";
import { AuthModal } from "../AuthModal/AuthModal.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";

// ======================== Стили ========================

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f4f5f6;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    width: 100%;
    height: 64px;
    background: #fff;
    border-bottom: 1px solid #f3f4f6;
    display: flex;
    justify-content: center;
`;

const HeaderInner = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
`;

const LogoWrapper = styled.div`
    margin-left: 120px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
`;

// Кнопка-ссылка в навигации (Мои расходы / Анализ расходов)
const NavLink = styled.button`
    font-family: "Montserrat", sans-serif;
    background: transparent;
    border: none;
    font-size: 14px;
    cursor: pointer;

    color: ${({ $active }) => ($active ? "#7334EA" : "#000")};
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;

// Кнопка «Выйти» в правом углу хедера
const ExitButton = styled.button`
    font-family: "Montserrat", sans-serif;
    margin-right: 120px; 
    border: none;
    background: transparent;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    color: #4b5563;
    cursor: pointer;
`;

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const MainInner = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 0 120px;
`;

// ======================== Основной компонент ========================

export const Layout = ({ children }) => {
    const location = useLocation();   // текущий путь (для подсветки активной ссылки)
    const navigate = useNavigate();   // программный переход по роутам

    // Все методы и состояния берём из AuthContext
    const {
        isAuthModalOpen,   // открыта ли модалка авторизации
        mode,              // "login" или "register"
        setMode,           // переключение между входом и регистрацией
        setIsAuthModalOpen,// открыть/закрыть модалку
        login,             // функция входа
        register,          // функция регистрации
        logout,            // функция выхода (должна ставить isAuth = false)
    } = useAuth();

    // Обработчик отправки формы (и логина, и регистрации)
    const handleAuthSubmit = (data) => {
        if (data.mode === "register") {
            // Регистрация — проверяем обязательные поля
            if (!data.email || !data.password) {
                alert("Email и пароль обязательны для регистрации");
                return;
            }
            register(data); // вызываем функцию регистрации из контекста
            return;
        }

        if (data.mode === "login") {
            // Логин
            const result = login(data);

            // Если login вернул объект с ошибкой — показываем алерт
            if (!result.ok) {
                if (result.reason === "no_user") {
                    alert("Пользователь не найден. Сначала зарегистрируйтесь.");
                } else if (result.reason === "invalid_credentials") {
                    alert("Неверный логин или пароль");
                } else {
                    alert("Ошибка авторизации");
                }
            }
            // Если всё ок — модалка закроется автоматически в AuthContext
        }
    };

    // ВАЖНО: если модалка открыта — показываем ТОЛЬКО её на весь экран
    // Это нужно, чтобы при первом входе пользователь не видел контент без авторизации
    if (isAuthModalOpen) {
        return (
            <Page>
                <AuthModal
                    mode={mode}
                    onModeChange={setMode}
                    onClose={() => setIsAuthModalOpen(false)} // закрываем модалку
                    onSubmit={handleAuthSubmit}               // отправка формы
                />
            </Page>
        );
    }

    // Обычная раскладка, когда пользователь уже авторизован или модалка закрыта
    return (
        <Page>
            <Header>
                <HeaderInner>
                    <LogoWrapper>
                        <img src={logo} alt="Skypro Logo" />
                    </LogoWrapper>

                    {/* Навигация по разделам */}
                    <Nav>
                        <NavLink
                            onClick={() => navigate("/expenses")}
                            $active={location.pathname === "/expenses"}
                        >
                            Мои расходы
                        </NavLink>

                        <NavLink
                            onClick={() => navigate("/analysis")}
                            $active={location.pathname === "/analysis"}
                        >
                            Анализ расходов
                        </NavLink>
                    </Nav>

                    {/* Кнопка выхода — видна только авторизованным */}
                    <ExitButton onClick={logout}>Выйти</ExitButton>
                </HeaderInner>
            </Header>

            {/* Основной контент страницы (ExpensesPage, AnalysisPage и т.д.) */}
            <Main>
                <MainInner>{children}</MainInner>
            </Main>

            {/* Модалка авторизации (если вдруг понадобится открыть поверх контента) */}
            {/* Сейчас она открывается только через isAuthModalOpen в AuthContext */}
            {isAuthModalOpen && (
                <AuthModal
                    mode={mode}
                    onModeChange={setMode}
                    onClose={() => setIsAuthModalOpen(false)}
                    onSubmit={handleAuthSubmit}
                />
            )}
        </Page>
    );
};