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
    padding: 0px calc(50% - 601px)
`;

const MainInner = styled.div`
    width: 100%;
`;

// ======================== Основной компонент ========================

export const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        isAuthModalOpen,   // открыта ли модалка авторизации
        mode,              // "login" или "register"
        setMode,           // переключение между входом и регистрацией
        setIsAuthModalOpen,// открыть/закрыть модалку
        login,             // функция входа
        register,          // функция регистрации
        logout,            // функция выхода (должна ставить isAuth = false)
        isAuth,
    } = useAuth();

    const handleAuthSubmit = async (data) => {
        if (data.mode === "register") {
            if (!data.email || !data.password || !data.name) {
                alert("Имя, email и пароль обязательны для регистрации");
                return;
            }
            const result = await register(data);

            if (!result.ok) {
                alert(result.message || "Ошибка регистрации");
            }

            return;
        }

        if (data.mode === "login") {
            if (!data.email || !data.password) {
                alert("Введите email и пароль");
                return;
            }

            const result = await login(data);

            if (!result.ok) {
                alert(result.message || "Неверный логин или пароль");
            }
        }
    };

    return (
        <Page>
            <Header>
                <HeaderInner>
                    <LogoWrapper>
                        <img src={logo} alt="Skypro Logo" />
                    </LogoWrapper>

                    {isAuth && (
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
                        )}

                    {isAuth && (
                        <ExitButton onClick={logout}>Выйти</ExitButton>
                    )}
                </HeaderInner>
            </Header>

            {isAuth && (
                <Main>
                    <MainInner>{children}</MainInner>
                </Main>
            )}

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