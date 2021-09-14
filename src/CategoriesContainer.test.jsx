import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식 ' },
    ],
  }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  fireEvent.click(getByText('한식'));

  expect(dispatch).toBeCalled();
});
