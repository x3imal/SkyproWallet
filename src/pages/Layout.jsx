import { Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f4f5f6;
  display: flex;
  flex-direction: column;
`;

export const LayoutPage = () => {
  return (
    <>
      <Layout />
      <Page>
        <Outlet />
      </Page>
    </>
  );
};
