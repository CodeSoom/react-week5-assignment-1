import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

const dispatch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

useDispatch.mockImplementation(() => dispatch);

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

  it('click category', () => {
    const { queryByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(queryByText(/한식/));

    expect(dispatch).toBeCalled();
  });
});
