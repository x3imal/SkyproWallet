import { useState } from 'react';
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 379px;
  height: 540px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
`;

export const CalendarHeader = styled.div``;

export const CalendarHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;
  padding: 32px 32px 30px 32px;
`;

export const CalendarHeaderTitle = styled.div`
  h3 {
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

export const CalendarHeaderPeriods = styled.div`
  display: flex;
  gap: 12px;
`;

export const CalendarPeriod = styled.button`
  padding: 0px;
  border: none;
  background: none;

  p {
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;

    &:hover {
      color: rgba(31, 164, 108, 1);
      font-weight: 600;
      cursor: pointer;
    }

    &:focus {
      color: rgba(31, 164, 108, 1);
      font-weight: 600;
      text-decoration-line: underline;
    }
  }
`;

export const CalendarWeekendsDays = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
`;

export const WeekendsDay = styled.div`
  width: 40px;
  h4 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0%;
    text-align: center;
  }
`;

export const HeaderLine = styled.div`
  margin-top: 6px;
  border: 0.01px solid rgba(153, 153, 153, 1);
`;

export const CalendarDates = styled.div`
  height: 426px;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
`;

export const CalendarMonths = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 12px 0px 32px;
`;

export const MonthsTitle = styled.div`
  padding-bottom: 12px;
  p {
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const CalendarDays = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CalendarCellS = styled.div`
  width: 36px;
  height: 36px;
  margin: 2px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 1);
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  border-radius: 60px;
  background: rgba(244, 245, 246, 1);

  &:hover {
    color: rgba(31, 164, 108, 1);
    background: rgba(219, 255, 233, 1);
  }
`;

export const EmptyDay = styled.div`
  width: 40px;
  height: 40px;
`;

export const CalendarYears = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 12px 0px 32px;
`;

export const YearsTitle = styled.div`
  padding-bottom: 12px;
  p {
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const CalendarMonthses = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CalendarFullMonth = styled.div`
  width: 101px;
  height: 34px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 1);
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  border-radius: 60px;
  background: rgba(244, 245, 246, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: center;

  &:hover {
    color: rgba(31, 164, 108, 1);
    background: rgba(219, 255, 233, 1);
  }
`;

export const Calendar = () => {
  const [isYear, setIsYear] = useState(false);

  const WeekendsDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const Months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const MonthNovember = new Date();

  const DecemberDays = [];

  const NovembersDays = [];

  const beginningNovember = new Date(MonthNovember.getFullYear(), MonthNovember.getMonth(), 1);

  const endNovember = new Date(MonthNovember.getFullYear(), MonthNovember.getMonth() + 1, 0);

  const beginningDecember = new Date(MonthNovember.getFullYear(), MonthNovember.getMonth() + 1, 1);

  const endDecember = new Date(MonthNovember.getFullYear(), MonthNovember.getMonth() + 2, 0);

  const startDayNovember = (beginningNovember.getDay() + 6) % 7;
  const daysPerMonthNovember = endNovember.getDate();

  const startDayDecember = (beginningDecember.getDay() + 6) % 7;
  const daysPerMonthDecember = endDecember.getDate();

  for (let i = 0; i < startDayNovember; i++) {
    NovembersDays.push(null);
  }
  for (let day = 1; day <= daysPerMonthNovember; day++) {
    NovembersDays.push(new Date(MonthNovember.getFullYear(), MonthNovember.getMonth(), day));
  }

  for (let i = 0; i < startDayDecember; i++) {
    DecemberDays.push(null);
  }
  for (let day = 1; day <= daysPerMonthDecember; day++) {
    DecemberDays.push(new Date(MonthNovember.getFullYear(), MonthNovember.getMonth() + 1, day));
  }

  const handleChangeYear = () => {
    setIsYear(true);
  };

  const handleChangeMonth = () => {
    setIsYear(false);
  };

  return (
    <>
      <CalendarWrapper>
        <CalendarHeader>
          <CalendarHeaderTop>
            <CalendarHeaderTitle>
              <h3>Период</h3>
            </CalendarHeaderTitle>
            <CalendarHeaderPeriods>
              <CalendarPeriod onClick={handleChangeMonth}>
                <p>Месяц</p>
              </CalendarPeriod>
              <CalendarPeriod onClick={handleChangeYear}>
                <p>Год</p>
              </CalendarPeriod>
            </CalendarHeaderPeriods>
          </CalendarHeaderTop>
          <CalendarWeekendsDays>
            {WeekendsDays.map((day) => (
              <WeekendsDay key={day}>
                <h4>{day}</h4>
              </WeekendsDay>
            ))}
          </CalendarWeekendsDays>
          <HeaderLine />
        </CalendarHeader>
        <CalendarDates>
          {!isYear ? (
            <>
              <CalendarMonths>
                <MonthsTitle>
                  <p>Ноябрь 2025</p>
                </MonthsTitle>
                <CalendarDays>
                  {NovembersDays.map((day, i) =>
                    day ? (
                      <CalendarCellS key={i}>{day.getDate()}</CalendarCellS>
                    ) : (
                      <EmptyDay key={i} />
                    ),
                  )}
                </CalendarDays>
              </CalendarMonths>
              <CalendarMonths>
                <MonthsTitle>
                  <p>Декабрь 2025</p>
                </MonthsTitle>
                <CalendarDays>
                  {DecemberDays.map((day, i) =>
                    day ? (
                      <CalendarCellS key={i}>{day.getDate()}</CalendarCellS>
                    ) : (
                      <EmptyDay key={i} />
                    ),
                  )}
                </CalendarDays>
              </CalendarMonths>
            </>
          ) : (
            <>
              <CalendarYears>
                <YearsTitle>
                  <p>2025</p>
                </YearsTitle>
                <CalendarMonthses>
                  {Months.map((Month, i) => (
                    <CalendarFullMonth key={i}>{Month}</CalendarFullMonth>
                  ))}
                </CalendarMonthses>
              </CalendarYears>
              <CalendarYears>
                <YearsTitle>
                  <p>2026</p>
                </YearsTitle>
                <CalendarMonthses>
                  {Months.map((Month, i) => (
                    <CalendarFullMonth key={i}>{Month}</CalendarFullMonth>
                  ))}
                </CalendarMonthses>
              </CalendarYears>
              <CalendarYears>
                <YearsTitle>
                  <p>2027</p>
                </YearsTitle>
                <CalendarMonthses>
                  {Months.map((Month, i) => (
                    <CalendarFullMonth key={i}>{Month}</CalendarFullMonth>
                  ))}
                </CalendarMonthses>
              </CalendarYears>
            </>
          )}
        </CalendarDates>
      </CalendarWrapper>
    </>
  );
};
