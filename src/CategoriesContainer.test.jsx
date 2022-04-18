import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { queryByText, getByText } = render((
    <CategoriesContainer />
  ));

  expect(queryByText('한식')).not.toBeNull();

  fireEvent.click(getByText('한식'));

  expect(dispatch).toBeCalledWith({
    type: 'selectCategory',
    payload: {
      id: 1,
    },
  });
});
