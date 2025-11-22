import styled from "styled-components";
import {ExpensesChartModal} from "../components/ExpensesChartModal/ExpensesChartModal.jsx";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px; 
`;

export const AnalysisPage = () => {
    return (
        <Wrapper>
            /* тут будет модалка календаря */
            <ExpensesChartModal />
        </Wrapper>
    );
};
