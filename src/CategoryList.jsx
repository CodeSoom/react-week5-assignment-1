import React from 'react';

import Item from './Item';

const CategoryList = ({ categories, onSelectCategoryClick }) => {
  if (categories.length === 0) {
    return null;
  }
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          onClick={() => onSelectCategoryClick(id)}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
