import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Categories from './Categories';

jest.mock('react-redux');

test('Categories', () => {
  const handleCategoryClick = jest.fn();

  useSelector.mockImplementation((selector) => selector({ categoryClicked: 1 }));
  const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }];

  const { queryByText } = render((
    <Categories
      categories={categories}
      onClick={handleCategoryClick}
    />));

  expect(queryByText('한식(V)')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();
});
