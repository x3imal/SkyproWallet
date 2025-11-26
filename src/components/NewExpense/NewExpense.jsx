import React from 'react';
import './NewExpense.css';
import Button from '../Button/Button.jsx';
import CategorySelector from '../CategorySelector/CategorySelector.jsx';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <h2>Новый расход</h2>
      <div className="description">
        <label>Описание</label>
        <input type="text" placeholder="Введите описание" />
      </div>
      //*<CategorySelector />**/
      <div className="date">
        <label>Дата</label>
        <input type="date" />
      </div>
      <div className="amount">
        <label>Сумма</label>
        <input type="number" placeholder="Введите сумму" />
      </div>
      <Button text="Добавить новый расход" />
    </div>
  );
};

export default NewExpense;