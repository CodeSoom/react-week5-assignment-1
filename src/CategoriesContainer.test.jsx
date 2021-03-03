import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('./services/api');
jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
  }));

  const { queryByText } = render(<CategoriesContainer />);

  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();

  fireEvent.click(queryByText('한식'));

  expect(dispatch).toBeCalledWith({
    type: 'categorySelect',
    payload: { categoryId: 1 },
  });
});
