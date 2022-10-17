import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('shows region', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories,
      restaurants: [],
    }));

    const { queryByText } = render((
      <CategoriesContainer />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('dispatchs select region', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories,
      restaurants: [],
      regionName: '',
      categoryId: 0,
    }));

    dispatch.mockImplementation(() => dispatch);

    const { queryByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(queryByText(/한식/));

    expect(dispatch).toBeCalledTimes(2);
  });
});
