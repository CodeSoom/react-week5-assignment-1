import React from 'react';

import { useSelector } from 'react-redux';

export default function App() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <div>
      {
        categories.map((category) => (
          <button type="button" key={category.id}>
            { category.name }
          </button>
        ))
      }
    </div>
  );
}
