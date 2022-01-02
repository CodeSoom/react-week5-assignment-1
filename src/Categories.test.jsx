import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { setCategory } from './actions';

import Categories from './Categories';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

test('Categories', () => {
  const dispatch = jest.fn();
  const categories = [{
    id: 1,
    name: '한식',
  }];

  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render(<Categories categories={categories} />);

  const button = getByText('한식');

  fireEvent.click(button);

  expect(dispatch).toBeCalledWith(setCategory({ category: '한식' }));
});
