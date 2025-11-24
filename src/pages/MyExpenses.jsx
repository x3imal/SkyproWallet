import React from "react";
import styled from "styled-components";
import {ExpenseTable} from "../components/ExpenseTable/ExpenseTable.jsx";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const MyExpensesPage = () => {
    return (
        <Wrapper>
            <ExpenseTable />
        </Wrapper>
    );
};
