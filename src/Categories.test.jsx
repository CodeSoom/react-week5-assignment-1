import { fireEvent, render } from '@testing-library/react';

import 'given2/setup';
import given from 'given2';

import Categories from './Categories';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Categories', () => {
  context('with categories', () => {
    given('categories', () => [
      { id: 1, name: '한식' },
    ]);

    it('renders categories', () => {
      const { queryByText } = render((
        <Categories
          categories={given.categories}
        />
      ));

      expect(queryByText(/한식/)).not.toBeNull();
    });

    it('clicks category and renders name with(V)', () => {
      const onClick = jest.fn();

      const { queryByText } = render((
        <Categories
          categories={given.categories}
          onClick={onClick}
        />
      ));

      fireEvent.click(queryByText(/한식/));

      expect(onClick).toBeCalled();
    });
  });

  context('without categories', () => {
    given('categories', () => []);

    it('renders "카테고리가 없어요!"', () => {
      const { queryByText } = render((
        <Categories
          categories={given.categories}
        />
      ));

      expect(queryByText(/카테고리가 없어요!/)).not.toBeNull();
    });
  });

  context('when selected', () => {
    given('categories', () => [
      { id: 1, name: '한식' },
    ]);

    it('renders name with (V)', () => {
      const onClick = jest.fn();

      const { queryByText } = render((
        <Categories
          selectedCategoryID={given.categories[0].id}
          categories={given.categories}
          onClick={onClick}
        />
      ));

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });
});
