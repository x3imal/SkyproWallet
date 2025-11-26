import styled from "styled-components";
import {Calendar} from "../components/Calendar/Calendar.jsx";
import {ExpensesChartModal} from "../components/ExpensesChartModal/ExpensesChartModal.jsx";
import newExpense from '../components/NewExpense/NewExpense.jsx';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const Content = styled.div`
    display: flex;
    gap: 32px;
`;

const PageTitle = styled.div`
    margin-top: 0;
    padding-top: 32px;

    h2 {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        color: #000000;
    }
`;

export const AnalysisPage = () => {

  const { expenses } = newExpense (null)
    return (
        <Wrapper>
            <PageTitle>
                <h2>Анализ расходов</h2>
            </PageTitle>

            <Content>
                <Calendar/>
                <ExpensesChartModal/>
            </Content>
        </Wrapper>
    );
};
