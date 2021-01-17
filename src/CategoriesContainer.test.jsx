import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      filter: {
        regionName: null,
        categoryId: null,
      },
      categories,
    }));
  });

  it('renders', () => {
    const { container } = render(<CategoriesContainer />);

    expect(container).not.toBeNull();
  });
});
