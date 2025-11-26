import React from 'react';
import './CategorySelector.css';

const CategorySelector = () => {
  return (
    <div className="category-selector">
      <label>Категория</label>
      <div className="categories">
        <div className="category">
          <input type="radio" id="food" name="category" value="food" />
          <label htmlFor="food">Еда</label>
        </div>
        <div className="category">
          <input type="radio" id="transport" name="category" value="transport" />
          <label htmlFor="transport">Транспорт</label>
        </div>
        <div className="category">
          <input type="radio" id="housing" name="category" value="housing" />
          <label htmlFor="housing">Жилье</label>
        </div>
        <div className="category">
          <input type="radio" id="entertainment" name="category" value="entertainment" />
          <label htmlFor="entertainment">Развлечения</label>
        </div>
        <div className="category">
          <input type="radio" id="education" name="category" value="education" />
          <label htmlFor="education">Образование</label>
        </div>
        <div className="category">
          <input type="radio" id="other" name="category" value="other" />
          <label htmlFor="other">Другое</label>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;