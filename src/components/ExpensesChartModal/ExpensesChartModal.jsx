import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { TransactionContext } from '../../contexts/TransactionContext.jsx';


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


const CATEGORY_CONFIG = {
  food: {
    label: "Еда",
    color: "#E2C4FF",
  },
  transport: {
    label: "Транспорт",
    color: "#FFB84D",
  },
  housing: {
    label: "Жилье",
    color: "#7AD7FF",
  },
  joy: {
    label: "Развлечения",
    color: "#C4D3FF",
  },
  education: {
    label: "Образование",
    color: "#D6FF79",
  },
  others: {
    label: "Другое",
    color: "#FFC4C4",
  },
};

const MAX_BAR_HEIGHT = 260;

export const ExpensesChartModal = () => {
  const { expenses } = useContext(TransactionContext);

  const { total, byCategory, periodText } = useMemo(() => {
    if (!expenses || expenses.length === 0) {
      return {
        total: 0,
        byCategory: [],
        periodText: "Нет данных по расходам",
      };
    }

    let total = 0;
    const sumsByCategory = {};
    let minDate = null;
    let maxDate = null;

    for (const exp of expenses) {
      const amount = Number(exp.sum || 0);
      const catKey = exp.category || "others";

      total += amount;
      sumsByCategory[catKey] = (sumsByCategory[catKey] || 0) + amount;

      if (exp.date) {
        const d = new Date(exp.date);
        if (!Number.isNaN(d.getTime())) {
          if (!minDate || d < minDate) minDate = d;
          if (!maxDate || d > maxDate) maxDate = d;
        }
      }
    }

    const byCategory = Object.entries(sumsByCategory).map(([key, value]) => {
      const cfg = CATEGORY_CONFIG[key] || { label: key, color: "#E5E7EB" };
      return {
        key,
        label: cfg.label,
        color: cfg.color,
        value,
      };
    });

    byCategory.sort((a, b) => b.value - a.value);

    let periodText = "Расходы за весь период";

    if (minDate && maxDate) {
      const sameDay =
        minDate.toDateString() === maxDate.toDateString();

      if (sameDay) {
        periodText = `Расходы за ${minDate.toLocaleDateString("ru-RU")}`;
      } else {
        periodText = `Расходы с ${minDate.toLocaleDateString(
          "ru-RU",
        )} по ${maxDate.toLocaleDateString("ru-RU")}`;
      }
    }

    return {
      total,
      byCategory,
      periodText,
    };
  }, [expenses]);

  const maxValue =
    byCategory.length > 0
      ? Math.max(...byCategory.map((item) => item.value))
      : 1;

  return (
    <Card>
      <SummaryBlock>
        <Total>{total.toLocaleString("ru-RU")} ₽</Total>
        <SummaryText>{periodText}</SummaryText>
      </SummaryBlock>

      <ChartBlock>
        {byCategory.length === 0 ? (
          <BarColumn>
            <BarValue>0 ₽</BarValue>
            <Bar color="#e5e7eb" height={4} />
            <BarLabel>Нет категорий</BarLabel>
          </BarColumn>
        ) : (
          byCategory.map((item) => {
            const height = Math.max(
              4,
              (item.value / maxValue) * MAX_BAR_HEIGHT,
            );

            return (
              <BarColumn key={item.key}>
                <BarValue>
                  {item.value.toLocaleString("ru-RU")} ₽
                </BarValue>
                <Bar color={item.color} height={height} />
                <BarLabel>{item.label}</BarLabel>
              </BarColumn>
            );
          })
        )}
      </ChartBlock>
    </Card>
  );
};
