import React from 'react';

import { useSelector } from 'react-redux';

import Category from './Category';

export default function Categories({ categories, onClick }) {
  const categoryClicked = useSelector((state) => state.categoryClicked);

  return (
    <ul>
      {categories.map((category) => {
        if (categoryClicked === category.id) {
          return (
            <Category
              key={category.id}
              category={{ id: category.id, name: `${category.name}(V)` }}
              onClick={onClick}
            />
          );
        }
        return (<Category key={category.id} category={category} onClick={onClick} />);
      })}
    </ul>
  );
}
