import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderCategories({ categoryLists, selectedCategoryId }) {
    return render((<Categories
      categories={categoryLists}
      onClick={handleClick}
      selectedCategoryId={selectedCategoryId}
    />));
  }

  it('Categories가 렌더링된다.', () => {
    const { getByText } = renderCategories({
      categoryLists: categories,
    });

    expect(getByText('한식')).not.toBeNull();
  });

  it('분류 목록을 클릭했을 때, onClick 함수에 id 값을 전달한다.', () => {
    const { getByText } = renderCategories({
      categoryLists: categories,
    });

    fireEvent.click(getByText('중식'));

    expect(handleClick).toBeCalledWith(2);
  });

  it('선택된 분류에 체크표시가 붙는다.', () => {
    const { getByText } = renderCategories({
      categoryLists: categories,
      selectedCategoryId: 3,
    });

    expect(getByText('일식✅')).not.toBeNull();
  });
});
