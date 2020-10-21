import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from './fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('show categories', () => {
    const { getByText } = render(<CategoriesContainer />);

    expect(getByText('한식')).not.toBeNull();
  });

  it('click category', () => {
    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith(
      {
        type: 'checkCategories',
        payload: { id: categories[0].id, isChecked: categories[0].isChecked },
      },
    );
  });
});
