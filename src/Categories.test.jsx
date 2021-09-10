import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

test('Categories', () => {
  const handleInputText = jest.jn();

  const { getByText } = render((
    <Categories categories={categories} onClick={handleInputText} />
  ));

  expect(getByText('한식')).not.toBeNull();
  fireEvent.click(getByText(/등록/));
});
