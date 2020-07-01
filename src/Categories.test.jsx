import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import Categories from './Categories';

jest.mock('react-redux');

test('Categories', () => {
  useSelector.mockImplementation((selector) => selector({
    selectedCategoryId: 2,
  }));

  const categories = [
    { id: 1, name: '한식' },
  ];

  const { getByText } = render((
    <Categories categories={categories} />
  ));

  expect(getByText('한식')).not.toBeNull();
});
