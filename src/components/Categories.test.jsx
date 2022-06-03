import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../fixtures/categories';

describe('Categories', () => {
  function renderCategories(selectedCategoryId) {
    return render(
      <Categories
        categories={categories}
        changeCategoryId={selectedCategoryId}
      />,
    );
  }

  it('"category"버튼을 렌더한다', () => {
    const { getByRole } = renderCategories();

    categories.forEach((category) => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });

  it('"changeCategoryId를 호출하면 호출한 category 버튼에 "(V)"표시를 렌더한다', () => {
    const { getByText } = renderCategories(categories[0]);

    expect(getByText(`${categories[0].name}(V)`)).toBeInTheDocument();
  });
});
