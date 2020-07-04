import React from 'react';

import { useSelector } from 'react-redux';

export default function CategoriesContainer() {
  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  return (
    <div>
      <ul>
        <li>중식</li>
      </ul>
    </div>
  );
}
