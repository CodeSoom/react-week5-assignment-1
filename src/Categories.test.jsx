import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
      selectedCategory: { category: { id: 1, name: '한식' } },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders categories list', () => {
    const { queryByText } = render(
      <Categories
        categories={categories}
      />,
    );

    expect(queryByText('한식')).not.toBeNull();
  });

  it('handleClick event and dispatches selecteCategory ', () => {
    const { queryByText } = render(
      <Categories
        categories={categories}
      />,
    );
    fireEvent.click(queryByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'selecteCategory',
      payload: { category: { id: 1, name: '한식' } },
    });
  });
});
