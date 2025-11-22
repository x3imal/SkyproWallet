import React from "react";
import styled from "styled-components";
import logo from "/assets/Logo.svg";

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #F4F5F6;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #f3f4f6;
    background: #ffffff;
    display: flex;
    align-items: center;
`;

const HeaderInner = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 64px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 120px;

    img {
        display: block;
    }
`;

const Nav = styled.nav`
    width: 274px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px; 
    margin: 0 auto; 
`;

const NavLink = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: 0;
    text-align: center;

    color: #000000;

    ${({ active }) =>
            active &&
            `
      color: #7334EA;
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 4px;
    `}

    &:hover {
        color: #7334EA;
        
    }
`;

const ExitButton = styled.button`
    margin-right: 120px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-size: 14px;
    line-height: 170%;
    font-weight: 600;

    color: #000000;

    &:hover {
        color: #7334EA;
    }
`;

const Main = styled.main`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MainInner = styled.div`
    width: 100%;
    max-width: 1440px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 36px;

    @media (max-width: 768px) {
        height: auto;
        min-height: calc(100vh - 64px);
        padding: 20px;
        align-items: flex-start;
    }
`;

export const Layout = ({ children }) => {
    return (
        <Page>
            <Header>
                <HeaderInner>
                    <LogoWrapper>
                        <img src={logo} alt="Skypro Wallet Logo" />
                    </LogoWrapper>

                    <Nav>
                        <NavLink active>Мои расходы</NavLink>
                        <NavLink>Анализ расходов</NavLink>
                    </Nav>

                    <ExitButton>Выйти</ExitButton>
                </HeaderInner>
            </Header>

            <Main>
                <MainInner>{children}</MainInner>
            </Main>
        </Page>
    );
};
