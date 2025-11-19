import styled from "styled-components";
import {ExpensesChartModal} from "../components/ExpensesChartModal/ExpensesChartModal.jsx";
import { Calendar } from "../components/ExpensesChartModal/Calendar.jsx";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px; 
`;

export const AnalysisPage = () => {
    return (
        <Wrapper>
            <Calendar/>
            <ExpensesChartModal />
        </Wrapper>
    );
};
