import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../fixture/test-data';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({ categories }));

  const { getByText } = render((
    <CategoriesContainer />
  ));
});
