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

export const CalendarPeriod = styled.div`
  p {
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const CalendarWeekendsDays = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;

export const WeekendsDay = styled.div`
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
  margin-bottom: 24px;
  border: 0.5px solid rgba(153, 153, 153, 1);
`;

export const Calendar = () => {
  const WeekendsDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  return (
    <>
      <CalendarWrapper>
        <CalendarHeader>
          <CalendarHeaderTop>
            <CalendarHeaderTitle>
              <h3>Период</h3>
            </CalendarHeaderTitle>
            <CalendarHeaderPeriods>
              <CalendarPeriod>
                <p>Месяц</p>
              </CalendarPeriod>
              <CalendarPeriod>
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
      </CalendarWrapper>
    </>
  );
};
