import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './ui/Button/Button.jsx';
import { Input } from './ui/Input/Input.jsx';

export const TableItem = styled.div`
    width: 100%;
    padding: 32px 118px 0;
    box-sizing: border-box;
`;

export const TableTitle = styled.div`
    margin-top: 0;
    margin-bottom: 32px;

    h2 {
        margin: 0;
        font-size: 32px;
        font-weight: 700;
        color: #000000;
    }
`;
export const TableInfo = styled.div`
  display: flex;
  gap: 34px;
`;

export const TableContainer = styled.div`
  width: 789px;
  height: 618px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: var(--Skyeng b2b / White, rgba(255, 255, 255, 1));
`;

export const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  padding: 32px;
  gap: 130px;
  justify-content: space-between;

  h3 {
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin: 0px;
  }
`;

export const HeaderFilters = styled.div`
  h3 {
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

export const FilterBattons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const FilterBatton = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;

  p {
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin: 0px;
    background-color: transparent;
    padding: 0px;
    height: 0px;

    &:hover {
      border-color: #fff;
    }
  }
`;

export const FilterCategory = styled.div`
  position: absolute;
  top: 66px;
  right: 166px;
  width: 176px;
  height: 240px;
  box-sizing: border-box;
  border: 0.5px solid rgba(153, 153, 153, 1);
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  padding: 12px;
`;

export const SortCategory = styled.div`
  position: absolute;
  top: 66px;
  right: 34px;
  width: 106px;
  height: 92px;
  box-sizing: border-box;
  border: 0.5px solid rgba(153, 153, 153, 1);
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgba(255, 255, 255, 1);
  padding: 12px;
`;

export const ContainerTitles = styled.div`
  display: flex;
  gap: 32px;
  padding: 0px 32px;
`;

export const ContainerTitle = styled.div`
  width: 141px;
  h4 {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    margin: 0px;
  }
`;

export const ContainerLine = styled.div`
  border: 0.5px solid rgba(153, 153, 153, 1);
  margin-top: 6px;
  margin-bottom: 11px;
`;

export const ContainerData = styled.div`
  height: 479px;
  overflow: auto;
  overscroll-behavior: contain;
`;

export const OneExpense = styled.div`
  display: flex;
  gap: 32px;
  padding: 0px 32px;
  align-items: center;
`;

export const ExpenseDiscription = styled.div`
  width: 141px;
  padding: 7px 0px;

  p {
    margin: 0px;
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const ExpenseCategory = styled.div`
  width: 141px;
  padding: 7px 0px;

  p {
    margin: 0px;
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const ExpenseDate = styled.div`
  width: 141px;
  padding: 7px 0px;

  p {
    margin: 0px;
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const ExpenseSumm = styled.div`
  width: 126px;
  padding: 7px 0px;

  p {
    margin: 0px;
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const OneExpenseButtons = styled.div`
  display: flex;
  gap: 12px;
  width: 34px;

  img {
    width: 12px;
    height: 12px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NewExpense = styled.div`
  width: 379px;
  height: 618px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: var(--Skyeng b2b / White, rgba(255, 255, 255, 1));
`;

export const NewExpenseConainer = styled.div`
  padding: 32px;
`;

export const NewExpenseTitle = styled.div`
  h3 {
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin: 0px;
    text-align: start;
  }
`;

export const NewExpenseInfo = styled.div`
  h4 {
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    margin: 0px;
    padding: 24px 0px 16px 0px;
  }
`;

const NewExpenseButton = styled(Button)`
  margin-top: 24px;
`;

export const NewExpenseCategory = styled.div`
  h4 {
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    margin: 0px;
    padding: 24px 0px 16px 0px;
  }
`;

export const ExpenseCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ExpenseCategoriesButton = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: 30px;

  &:focus {
    outline: none;
    background: rgba(219, 255, 233, 1);
  }
`;

export const CategoriesButtonContent = styled.div`
  display: flex;
  gap: 12px;

  img {
    height: 14px;
    width: 14px;
  }

  p {
    margin: 0px;
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0%;
    text-align: center;
  }
`;



export const ExpenseTable = () => {
  const titles = ['Описание', 'Категория', 'Дата', 'Сумма'];
  const [isEditExpense, setIsEditExpense] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const MOBILE_BREAKPOINT = 376;

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };

      mql.addEventListener('change', onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

      return () => {
        mql.removeEventListener('change', onChange);
      };
    }, []);

    return !!isMobile;
  }

  function MyComponent() {
const isMobile = useIsMobile();

console.log(isMobile ? "Мобильная версия" : "Десктопная версия")
}

MyComponent()

  const expenses = [
    {
      number: 1,
      description: 'Лукойл',
      category: 'Транспорт',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 2,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 3,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 4,
      description: 'Лукойл',
      category: 'Транспорт',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 5,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 6,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 7,
      description: 'Лукойл',
      category: 'Транспорт',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 8,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 9,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 10,
      description: 'Лукойл',
      category: 'Транспорт',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 11,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 12,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 13,
      description: 'Лукойл',
      category: 'Транспорт',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 14,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 15,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 16,
      description: 'Лукойл',
      category: 'Транспорт',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 17,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 18,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
    {
      number: 19,
      description: 'Перекрёсток',
      category: 'Еда',
      date: '29.06.2025',
      sum: 2360,
    },
    {
      number: 20,
      description: 'Бильярд',
      category: 'Развлечения',
      date: '29.06.2025',
      sum: 1000,
    },
  ];

  const editExpense = () => {
    if (isEditExpense) {
      setIsEditExpense(false);
    } else {
      setIsEditExpense(true);
    }
  };

  const sortExpense = () => {
    if (isSort) {
      setIsSort(false);
    } else {
      setIsSort(true);
    }
  };

  const filterExpense = () => {
    if (isFilter) {
      setIsFilter(false);
    } else {
      setIsFilter(true);
    }
  };

  return (
    <>
      <TableItem>
        <TableTitle>
          <h2>Мои расходы</h2>
        </TableTitle>
        <TableInfo>
          <TableContainer>
            <ContainerHeader>
              <h3>Таблица расходов</h3>
              <FilterBattons>
                <FilterBatton onClick={filterExpense}>
                  <p>Фильтровать по:</p>
                  <p></p>
                  <p>
                    <img src="public/FilterArrow.svg" alt="Arrow" />
                  </p>
                </FilterBatton>
                <FilterBatton onClick={sortExpense}>
                  <p>Сортировать по:</p>
                  <p></p>
                  <p>
                    <img src="public/FilterArrow.svg" alt="Arrow" />
                  </p>
                </FilterBatton>
              </FilterBattons>
              {isFilter && (
                <FilterCategory>
                  <ExpenseCategories>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/FoodIcon.svg" alt="FoodIcon" />
                        <p>Еда</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/TransportIcon.svg" alt="TransportIcon" />
                        <p>Транспорт</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/HouseIcon.svg" alt="HouseIcon" />
                        <p>Жилье</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/GameIcon.svg" alt="GameIcon" />
                        <p>Развлечения</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/EducationIcon.svg" alt="EducationIcon" />
                        <p>Образование</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/OtherIcon.svg" alt="OtherIcon" />
                        <p>Другое</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                  </ExpenseCategories>
                </FilterCategory>
              )}
              {isSort && (
                <SortCategory>
                  <ExpenseCategories>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <p>Дате</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <p>Сумме</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                  </ExpenseCategories>
                </SortCategory>
              )}
            </ContainerHeader>
            <ContainerTitles>
              {titles.map((title) => (
                <ContainerTitle key={title}>
                  <h4>{title}</h4>
                </ContainerTitle>
              ))}
              <div></div>
            </ContainerTitles>
            <ContainerLine />
            <ContainerData>
              {expenses.map((expense) => (
                <OneExpense key={expense.number}>
                  <ExpenseDiscription>
                    <p>{expense.description}</p>
                  </ExpenseDiscription>
                  <ExpenseCategory>
                    <p>{expense.category}</p>
                  </ExpenseCategory>
                  <ExpenseDate>
                    <p>{expense.date.toLocaleString()}</p>
                  </ExpenseDate>
                  <ExpenseSumm>
                    <p>{expense.sum} Р</p>
                  </ExpenseSumm>
                  <OneExpenseButtons>
                    <img onClick={editExpense} src="public/EditSign.svg" alt="EditSign" />
                    <img src="public/DeleteSign.svg" alt="DeleteSign" />
                  </OneExpenseButtons>
                </OneExpense>
              ))}
            </ContainerData>
          </TableContainer>
          {isEditExpense ? (
            <NewExpense>
              <NewExpenseConainer>
                <NewExpenseTitle>
                  <h3>Редактирование</h3>
                </NewExpenseTitle>
                <NewExpenseInfo>
                  <h4>Описание</h4>
                  <Input
                    name="description"
                    id="textArea"
                    placeholder="Введите описание"
                    type="text"
                  />
                </NewExpenseInfo>
                <NewExpenseCategory>
                  <h4>Категория</h4>
                  <ExpenseCategories>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/FoodIcon.svg" alt="FoodIcon" />
                        <p>Еда</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/TransportIcon.svg" alt="TransportIcon" />
                        <p>Транспорт</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/HouseIcon.svg" alt="HouseIcon" />
                        <p>Жилье</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/GameIcon.svg" alt="GameIcon" />
                        <p>Развлечения</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/EducationIcon.svg" alt="EducationIcon" />
                        <p>Образование</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/OtherIcon.svg" alt="OtherIcon" />
                        <p>Другое</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                  </ExpenseCategories>
                </NewExpenseCategory>
                <NewExpenseInfo>
                  <h4>Дата</h4>
                  <Input
                    name="date"
                    id="textDate"
                    placeholder="Введите дату"
                    type="text"
                  />
                </NewExpenseInfo>
                <NewExpenseInfo>
                  <h4>Сумма</h4>
                  <Input
                    name="summ"
                    id="textSumm"
                    placeholder="Введите сумму"
                    type="text"
                  />
                </NewExpenseInfo>
                <NewExpenseButton>
                  <p>Сохранить редактирование</p>
                </NewExpenseButton>
              </NewExpenseConainer>
            </NewExpense>
          ) : (
            <NewExpense>
              <NewExpenseConainer>
                <NewExpenseTitle>
                  <h3>Новый расход</h3>
                </NewExpenseTitle>
                <NewExpenseInfo>
                  <h4>Описание</h4>
                  <Input
                    name="description"
                    id="textArea"
                    placeholder="Введите описание"
                    type="text"
                  />
                </NewExpenseInfo>
                <NewExpenseCategory>
                  <h4>Категория</h4>
                  <ExpenseCategories>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/FoodIcon.svg" alt="FoodIcon" />
                        <p>Еда</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/TransportIcon.svg" alt="TransportIcon" />
                        <p>Транспорт</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/HouseIcon.svg" alt="HouseIcon" />
                        <p>Жилье</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/GameIcon.svg" alt="GameIcon" />
                        <p>Развлечения</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/EducationIcon.svg" alt="EducationIcon" />
                        <p>Образование</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                    <ExpenseCategoriesButton>
                      <CategoriesButtonContent>
                        <img src="public/OtherIcon.svg" alt="OtherIcon" />
                        <p>Другое</p>
                      </CategoriesButtonContent>
                    </ExpenseCategoriesButton>
                  </ExpenseCategories>
                </NewExpenseCategory>
                <NewExpenseInfo>
                  <h4>Дата</h4>
                  <Input
                    name="date"
                    id="textDate"
                    placeholder="Введите дату"
                    type="text"
                  />
                </NewExpenseInfo>
                <NewExpenseInfo>
                  <h4>Сумма</h4>
                  <Input
                    name="summ"
                    id="textSumm"
                    placeholder="Введите сумму"
                    type="text"
                  />
                </NewExpenseInfo>
                <NewExpenseButton>
                  <p>Добвить новый расход</p>
                </NewExpenseButton>
              </NewExpenseConainer>
            </NewExpense>
          )}
        </TableInfo>
      </TableItem>
    </>
  );
};
