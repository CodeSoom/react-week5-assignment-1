import React from 'react';

import { useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

test('CategoryContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const category = {
    id: 1,
    name: '한식',
  };

  const { getByText } = render((
    <CategoryContainer category={category} />
  ));

  expect(getByText('한식')).not.toBeNull();

  fireEvent.click(getByText('한식'));
  expect(dispatch).toBeCalledWith({
    type: 'setSelectedCategoryId',
    payload: {
      id: 1,
    },
  });
});
