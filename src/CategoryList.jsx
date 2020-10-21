import React from 'react';

import Item from './Item';

const CategoryList = ({ categories, onSelectCategoryClick, categoryState }) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          name={id === categoryState ? `${name}(V)` : name}
          onClick={() => onSelectCategoryClick({ type: 'category', id })}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
