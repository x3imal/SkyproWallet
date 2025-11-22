import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 789px;
  height: 540px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px #00000021;
  padding: 32px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const SummaryBlock = styled.div`
  width: 725px;
  height: 56px;
    gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Total = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 100%;
  color: #000000;
`;

const SummaryText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: #999999;
`;

const ChartBlock = styled.div`
  width: 725px;
  height: 387px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const BarColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const BarValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  color: #000000;
`;

const Bar = styled.div`
  width: 96px;
  border-radius: 20px 20px 0 0;
  background: ${({ color }) => color || "#e5e7eb"};
  height: ${({ height }) => height || 40}px;
`;

const BarLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: #000000;
`;

export const ExpensesChartModal = () => {
    return (
        <Card>
            <SummaryBlock>
                <Total>9 581 ₽</Total>
                <SummaryText>Расходы за 10 июля 2024</SummaryText>
            </SummaryBlock>

            <ChartBlock>
                <BarColumn>
                    <BarValue>3 590 ₽</BarValue>
                    <Bar color="#E2C4FF" height={260} />
                    <BarLabel>Еда</BarLabel>
                </BarColumn>

                <BarColumn>
                    <BarValue>1 835 ₽</BarValue>
                    <Bar color="#FFB84D" height={200} />
                    <BarLabel>Транспорт</BarLabel>
                </BarColumn>

                <BarColumn>
                    <BarValue>0 ₽</BarValue>
                    <Bar color="#7AD7FF" height={4} />
                    <BarLabel>Жилье</BarLabel>
                </BarColumn>

                <BarColumn>
                    <BarValue>1 250 ₽</BarValue>
                    <Bar color="#C4D3FF" height={170} />
                    <BarLabel>Развлечения</BarLabel>
                </BarColumn>

                <BarColumn>
                    <BarValue>600 ₽</BarValue>
                    <Bar color="#D6FF79" height={120} />
                    <BarLabel>Образование</BarLabel>
                </BarColumn>

                <BarColumn>
                    <BarValue>2 306 ₽</BarValue>
                    <Bar color="#FFC4C4" height={220} />
                    <BarLabel>Другое</BarLabel>
                </BarColumn>
            </ChartBlock>
        </Card>
    );
};
