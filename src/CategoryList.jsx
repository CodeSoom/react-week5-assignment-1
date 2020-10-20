import React from 'react';

import Item from './Item';

const CategoryList = ({ categorys, onSelectCategoryClick }) => {
  if (categorys.length === 0) {
    return null;
  }
  return (
    <ul>
      {categorys.map(({ id, name }) => (
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
