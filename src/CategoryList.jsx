import React from 'react';

import Item from './Item';

const CategoryList = ({ categories, onSelectCategoryClick, categoryId }) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          check={id === categoryId}
          onClick={() => onSelectCategoryClick({ type: 'category', id })}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
