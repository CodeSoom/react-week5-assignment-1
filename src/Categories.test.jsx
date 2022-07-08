import { render } from '@testing-library/react';

import { categoryId, categories } from './fixtures/restaurant';

import CategoriesComponent from './Categories';

describe('Categories', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickSelectCategory = jest.fn();

  const renderCategories = (value) => render((
    <CategoriesComponent
      category={value}
      categories={categories}
      onClickSelectCategory={handleClickSelectCategory}
    />
  ));

  it('categories가 렌더링된다', () => {
    const { container } = renderCategories();

    expect(container).toHaveTextContent(categories[0].name);
  });

  context('category가 없을때', () => {
    it('(V) 표시가 보이지않는다', () => {
      const { container } = renderCategories('');

      expect(container).not.toHaveTextContent('(V)');
    });
  });

  context('category가 있을때', () => {
    it('(V) 표시가 렌더링된다', () => {
      const { container } = renderCategories(categoryId);

      expect(container).toHaveTextContent('(V)');
    });
  });
});
