import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    const { queryByText } = render((
      <CategoriesContainer />
    ));

    expect(queryByText('한식')).not.toBeNull();
  });

  it('calls dispatch', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        id: 1,
      },
    });
  });
});
