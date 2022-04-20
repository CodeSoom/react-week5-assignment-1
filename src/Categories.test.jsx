import { render } from '@testing-library/react';

import 'given2/setup';
import given from 'given2';

import Categories from './Categories';

const renderCategories = (categories) => render((
  <Categories
    categories={categories}
  />
));

describe('Categories', () => {
  context('with categories', () => {
    given('categories', () => [
      { id: 1, name: '한식' },
    ]);

    it('renders categories', () => {
      const { queryByText } = renderCategories(given.categories);

      expect(queryByText(/한식/)).not.toBeNull();
    });
  });

  context('without categories', () => {
    given('categories', () => []);

    it('renders "카테고리가 없어요!"', () => {
      const { queryByText } = renderCategories(given.categories);

      expect(queryByText(/카테고리가 없어요!/)).not.toBeNull();
    });
  });
});
