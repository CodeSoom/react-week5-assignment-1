import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import categories from '../fixtures/categories';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

test('CagegoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  expect(getByText('한식')).not.toBeNull();
});
