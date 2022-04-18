import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixture/categories';

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('renders categories', () => {
    const { container } = render((
      <CategoriesContainer />
    ));

    expect(container).toHaveTextContent('한식');
  });

  it('listens for click event on select category', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        selectCategoryId: 1,
      },
    });
  });

  context('when selected', () => {
    it('renders category name with (V)', () => {
      useSelector.mockImplementationOnce((selector) => selector({
        selectCategoryId: 1,
        categories: [
          { id: 1, name: '한식' },
        ],
      }));

      const { queryByText } = render((
        <CategoriesContainer />
      ));

      expect(queryByText('한식 (V)')).not.toBeNull();
    });
  });
});
