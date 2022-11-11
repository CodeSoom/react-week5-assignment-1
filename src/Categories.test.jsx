import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderCategories(categoryId) {
    return render((<Categories
      categories={categories}
      onClick={handleClick}
      selectedCategory={categoryId}
    />));
  }

  it('Categories가 렌더링된다.', () => {
    const { getByText } = renderCategories();

    expect(getByText('한식')).not.toBeNull();
  });

  it('분류 목록을 클릭했을 때, onClick 함수에 id 값을 전달한다.', () => {
    const { getByText } = renderCategories();

    fireEvent.click(getByText('중식'));

    expect(handleClick).toBeCalledWith(2);
  });

  it('분류 목록을 클릭했을 때, 선택된 분류에 체크 표시가 붙는다.', () => {
    const { getByText } = renderCategories(3);

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('일식✅'));

    expect(handleClick).toBeCalled();

    expect(getByText('일식✅')).not.toBeNull();
  });
});
