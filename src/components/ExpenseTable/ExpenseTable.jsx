import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../ui/Button/Button.jsx';
import { Input } from '../ui/Input/Input.jsx';
import { postExpense } from '..//../api/transactions.js';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { TransactionContext } from '../../contexts/TransactionContext.jsx';

export const TableItem = styled.div`
  width: 100%;
  padding: 32px 0 0;
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
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px #00000021;
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
  scrollbar-width: thin;
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
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px #00000021;
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
  margin-top: ${({ $isError }) => ($isError ? '0px' : '24px')};
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
  cursor: pointer;

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

export const Error = styled.p`
  color: ${(props) => props.theme.error || '#ff6666'};
  text-align: center;
  font-size: 10px;
  padding-top: 4px;
  height: 20px;
`;

export const ExpenseTable = () => {
  const titles = ['Описание', 'Категория', 'Дата', 'Сумма'];
  const [isEditExpense, setIsEditExpense] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [isError, setIsError] = useState('');

  const MOBILE_BREAKPOINT = 376;

  // function useIsMobile() {
  //   const [isMobile, setIsMobile] = useState(undefined);

  //   useEffect(() => {
  //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

  //     const onChange = () => {
  //       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  //     };

  //     mql.addEventListener('change', onChange);
  //     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

  //     return () => {
  //       mql.removeEventListener('change', onChange);
  //     };
  //   }, []);

  //   return !!isMobile;
  // }

  // function MyComponent() {
  //   const isMobile = useIsMobile();

  //   console.log(isMobile ? 'Мобильная версия' : 'Десктопная версия');
  // }

  // MyComponent();

  const { expenses, getTransactions } = useContext(TransactionContext);
  const { token } = useAuth();

  const categories = [
    {
      name: 'Еда',
      necName: 'food',
      image: '../../../public/FoodIcon.svg',
      description: 'FoodIcon',
    },
    {
      name: 'Транспорт',
      necName: 'transport',
      image: '../../../public/TransportIcon.svg',
      description: 'TransportIcon',
    },
    {
      name: 'Жилье',
      necName: 'housing',
      image: '../../../public/HouseIcon.svg',
      description: 'HouseIcon',
    },
    {
      name: 'Развлечения',
      necName: 'joy',
      image: '../../../public/GameIcon.svg',
      description: 'GameIcon',
    },
    {
      name: 'Образование',
      necName: 'education',
      image: '../../../public/EducationIcon.svg',
      description: 'EducationIcon',
    },
    {
      name: 'Другое',
      necName: 'others',
      image: '../../../public/OtherIcon.svg',
      description: 'OtherIcon',
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

  const [category, setCategory] = useState('');

  const activeCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const [formData, setFormData] = useState({
    description: '',
    summ: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const createExpense = async (e) => {
    e.preventDefault();

    const newExpense = {
      description: formData.description,
      sum: Number(formData.summ),
      category: category,
      date: formData.date,
    };

    if (!newExpense.description || !newExpense.sum || !newExpense.category || !newExpense.date) {
      setIsError('Заполните все поля: описание, категория, дата, сумма');
      return;
    }

    if (newExpense.sum < 0) {
      setIsError('Сумма должна быть положительным числом');
      return;
    }

    if (newExpense.description.length < 4) {
      setIsError('В описании должно быть больше 4 символов');
      return;
    }

    try {
      await postExpense({ token, expense: newExpense });
      getTransactions();
    } catch (err) {
      console.error('Ошибка в создании расхода:', err);
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
                    <img src="../../../public/FilterArrow.svg" alt="Arrow" />
                  </p>
                </FilterBatton>
                <FilterBatton onClick={sortExpense}>
                  <p>Сортировать по:</p>
                  <p></p>
                  <p>
                    <img src="../../../public/FilterArrow.svg" alt="Arrow" />
                  </p>
                </FilterBatton>
              </FilterBattons>
              {isFilter && (
                <FilterCategory>
                  <ExpenseCategories>
                    {categories.map((category) => {
                      return (
                        <ExpenseCategoriesButton key={category.name}>
                          <CategoriesButtonContent>
                            <img src={category.image} alt={category.description} />
                            <p>{category.name}</p>
                          </CategoriesButtonContent>
                        </ExpenseCategoriesButton>
                      );
                    })}
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
                <OneExpense key={expense._id}>
                  <ExpenseDiscription>
                    <p>{expense.description}</p>
                  </ExpenseDiscription>
                  <ExpenseCategory>
                    <p>{expense.category}</p>
                  </ExpenseCategory>
                  <ExpenseDate>
                    <p>{new Date(expense.date).toLocaleDateString('ru-RU')}</p>
                  </ExpenseDate>
                  <ExpenseSumm>
                    <p>{expense.sum} Р</p>
                  </ExpenseSumm>
                  <OneExpenseButtons>
                    <img onClick={editExpense} src="../../../public/EditSign.svg" alt="EditSign" />
                    <img src="../../../public/DeleteSign.svg" alt="DeleteSign" />
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
                    {categories.map((category) => {
                      return (
                        <ExpenseCategoriesButton key={category.name}>
                          <CategoriesButtonContent>
                            <img src={category.image} alt={category.description} />
                            <p>{category.name}</p>
                          </CategoriesButtonContent>
                        </ExpenseCategoriesButton>
                      );
                    })}
                  </ExpenseCategories>
                </NewExpenseCategory>
                <NewExpenseInfo>
                  <h4>Дата</h4>
                  <Input name="date" id="textDate" placeholder="Введите дату" type="text" />
                </NewExpenseInfo>
                <NewExpenseInfo>
                  <h4>Сумма</h4>
                  <Input name="summ" id="textSumm" placeholder="Введите сумму" type="text" />
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
                    onChange={handleChange}
                  />
                </NewExpenseInfo>
                <NewExpenseCategory>
                  <h4>Категория</h4>
                  <ExpenseCategories>
                    {categories.map((category) => {
                      return (
                        <ExpenseCategoriesButton
                          key={category.necName}
                          onClick={() => activeCategory(category.necName)}
                        >
                          <CategoriesButtonContent>
                            <img src={category.image} alt={category.description} />
                            <p>{category.name}</p>
                          </CategoriesButtonContent>
                        </ExpenseCategoriesButton>
                      );
                    })}
                  </ExpenseCategories>
                </NewExpenseCategory>
                <NewExpenseInfo>
                  <h4>Дата</h4>
                  <Input
                    name="date"
                    id="textDate"
                    placeholder="Введите дату"
                    type="date"
                    onChange={handleChange}
                  />
                </NewExpenseInfo>
                <NewExpenseInfo>
                  <h4>Сумма</h4>
                  <Input
                    name="summ"
                    id="textSumm"
                    placeholder="Введите сумму"
                    type="number"
                    onChange={handleChange}
                  />
                </NewExpenseInfo>
                {isError && <Error>{isError}</Error>}
                <NewExpenseButton $isError={isError} onClick={createExpense}>
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
