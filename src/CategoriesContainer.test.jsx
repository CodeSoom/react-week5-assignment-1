import { render } from '@testing-library/react';

import { useDispatch, useSelector } from '../__mocks__/react-redux';

import CategoriesContainer from './CategoriesContainer';

import { setCategories } from './actions';

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  const { getByText } = render(<CategoriesContainer />);

  expect(getByText('한식')).not.toBeUndefined();

  expect(dispatch).toBeCalledWith(setCategories());

  expect(getByText('중식')).not.toBeUndefined();
});
