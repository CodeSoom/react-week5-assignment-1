import React from 'react';

import categories from '../fixtures/categories';

import ButtonTemplate from './ButtonTemplate';

export default function CategoriesContainer() {
  return (
    <ButtonTemplate buttons={categories} />
  );
}
