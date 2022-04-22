import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

const dispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockImplementation(() => dispatch);
  jest.clearAllMocks();
});

describe('CategoriesContainer', () => {
  it('renders categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { queryByText } = render((
      <CategoriesContainer />
    ));

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('clicks category', () => {
    const { queryByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(queryByText(/한식/));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        selectedCategoryID: 1,
      },
    });
  });
});
