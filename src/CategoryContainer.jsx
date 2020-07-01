import React from 'react';

import Category from './Category';

export default function CategoryContainer({ category }) {
  return (
    <Category name={category.name} />
  );
}
