import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from './fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('show categories and regions', () => {
    const { getByText } = render(<CategoriesContainer />);

    expect(getByText('한식')).not.toBeNull();
  });
});
