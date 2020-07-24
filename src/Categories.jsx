import React from 'react';

import Category from './Category';

export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <>
      <ul>
        {
          categories.map((category) => (
            <Category
              category={category}
              selectedCategory={selectedCategory}
              onClick={onClick}
              key={category.id}
            />
          ))
        }
      </ul>
    </>
  );
}
