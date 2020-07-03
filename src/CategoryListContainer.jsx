import React from 'react';

import CategoryList from './CategoryList';

import { categoryList } from '../__fixture__/restaurants';

export default function CategoryListContainer() {
  return (
    <CategoryList
      categoryList={categoryList}
    />
  );
}
