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
    display: flex;
    align-items: center;
    padding: 0 120px;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f4f6;
    background: #ffffff; 

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 23px;
    margin-bottom: 22px;
`;



const Main = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
`;

export const Layout = ({ children }) => {
    return (
        <Page>
            <Header>
                <LogoWrapper>
                    {/*<LogoText>*/}
                        <img src={logo} alt="Skypro Wallet Logo" />
                    {/*</LogoText>*/}
                </LogoWrapper>
            </Header>

            <Main>{children}</Main>
        </Page>
    );
};
