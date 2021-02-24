import React from 'react';

import categories from '../fixtures/categories';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  return (
    <Buttons buttons={categories} />
  );
}
