import { render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import Categories from './Categories';

describe('Categories', () => {
  given('categories', () => [{
    id: 1,
    name: '두향',
  }]);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategories() {
    return render((
      <Categories
        categories={given.categories}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with categories', () => {
    given('categories', () => [{
      id: 1,
      name: '한식',
    }]);

    it('renders categories', () => {
      const { container } = renderCategories();

      expect(container).toHaveTextContent(/한식/);
    });
  });

  context('without categories', () => {
    given('categories', () => []);

    it('renders "카테고리가 없어요!"', () => {
      const { container } = renderCategories();

      expect(container).toHaveTextContent(/카테고리가 없어요!/);
    });
  });
});
