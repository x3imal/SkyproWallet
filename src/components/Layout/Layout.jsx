import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/Logo.svg";

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

const NavLink = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;

  color: ${({ $active }) => ($active ? "#7334EA" : "#000")};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainInner = styled.div`
  width: 100%;
  max-width: 1440px;
`;

export const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Page>
            <Header>
                <HeaderInner>
                    <LogoWrapper>
                        <img src={logo} alt="Skypro Logo" />
                    </LogoWrapper>

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

                    <div style={{ marginRight: 120 }}>Выйти</div>
                </HeaderInner>
            </Header>

            <Main>
                <MainInner>{children}</MainInner>
            </Main>
        </Page>
    );
};
