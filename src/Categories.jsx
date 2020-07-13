import React from 'react';

import Category from './Category';

export default function Categories({ categories, categoryId, onClick }) {
  return (
    <>
      <ul>
        {
          categories.map((category) => (
            <Category
              category={category}
              categoryId={categoryId}
              onClick={onClick}
              key={category.id}
            />
          ))
        }
      </ul>
    </>
  );
}
