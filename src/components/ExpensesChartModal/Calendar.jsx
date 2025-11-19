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

export const CalendarHeaderPeriods = styled.div``;

export const CalendarPeriod = styled.div``;

export const Calendar = () => {
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
        </CalendarHeader>
      </CalendarWrapper>
    </>
  );
};
