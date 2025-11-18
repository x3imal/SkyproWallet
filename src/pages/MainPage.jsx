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
    margin: 0 auto;
    padding: 0 120px;
    display: flex;
    align-items: center;

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
`;

const MainInner = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center; 
  align-items: center;

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
                </HeaderInner>
            </Header>

            <Main>
                <MainInner>{children}</MainInner>
            </Main>
        </Page>
    );
};
