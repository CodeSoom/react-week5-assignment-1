import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderCategories({ categoryId }) {
    return render((
      <Categories
        categories={categories}
        categoryId={categoryId}
        onClick={handleClick}
      />
    ));
  }

  context('when the category is selected', () => {
    it('renders category with a mark', () => {
      const { queryByText } = renderCategories({ categoryId: 1 });

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });

  context('when the category is not selected', () => {
    it('render category without mark', () => {
      const { queryByText } = renderCategories({ categoryId: '' });

      expect(queryByText('한식')).not.toBeNull();
    });
  });

  it('calls handleClick', () => {
    const { getByText } = renderCategories({ categoryId: '' });

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
