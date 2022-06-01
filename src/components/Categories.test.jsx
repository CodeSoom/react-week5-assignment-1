import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../fixtures/categories';

describe('Categories', () => {
  const renderCategories = (changeCategoryId) =>
    render(
      <Categories categories={categories} changeCategoryId={changeCategoryId} />
    );

  it('"category"버튼을 렌더한다', () => {
    const { getByRole } = renderCategories();

    categories.forEach((category) => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });

  it('"category"버튼을 클릭하면 "(V)"표시가 추가된다', () => {
    const { getByText } = renderCategories(categories[0]);

    expect(getByText(`${categories[0].name}(V)`)).toBeInTheDocument();
  });
});
