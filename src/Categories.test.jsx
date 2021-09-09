import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickCategory = jest.fn();

  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
  ];

  const checkedCategoryId = 0;

  function renderCategories() {
    return (
      render(<Categories
        categories={categories}
        onClickCategory={handleClickCategory}
        checkedCategoryId={checkedCategoryId}
      />)
    );
  }

  it('지역 목록을 보여준다', () => {
    const { getByText } = renderCategories();

    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('중식')).toBeInTheDocument();
    expect(getByText('일식')).toBeInTheDocument();
  });

  it('목록이 클릭되면 이벤트가 호출된다.', () => {
    const { getByText } = renderCategories();

    fireEvent.click(getByText('한식'));

    expect(handleClickCategory).toBeCalled();
  });
});
