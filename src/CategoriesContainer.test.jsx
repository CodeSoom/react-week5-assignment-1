import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [
      {
        id: 1,
        name: '한식',
      },
    ],
  }));

  it('render regionList name', () => {
    const { queryByText } = render((
      <CategoriesContainer />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });
});
