import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const handleClick = jest.fn();

  function renderCategories({ categories, selectId } = { selectId: null }) {
    return render((
      <Categories
        categories={categories}
        onClick={handleClick}
        selectId={selectId}
      />
    ));
  }

  it('renders Categories', () => {
    const categories = [{ id: 1, name: '한식' }];

    const { queryByText } = renderCategories({ categories });

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens category button click event', () => {
    const categories = [{ id: 1, name: '한식' }];

    const { queryByText } = renderCategories({ categories });

    fireEvent.click(queryByText('한식'));

    expect(handleClick).toBeCalledWith(1);
  });

  context('when selected', () => {
    it('renders "category name" + "(V)"', () => {
      const categories = [{ id: 1, name: '한식' }];

      const { queryByText } = renderCategories({ categories, selectId: 1 });

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });

  context('When not selected', () => {
    it('renders "category name"', () => {
      const categories = [{ id: 1, name: '한식' }];

      const { queryByText } = renderCategories({ categories });

      expect(queryByText('한식(V)')).toBeNull();
    });
  });
});
