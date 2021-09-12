import { render } from '@testing-library/react';

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

  function renderCategories(checkedCategory) {
    return (
      render(<Categories
        categories={categories}
        onClickCategory={handleClickCategory}
        checkedCategory={checkedCategory}
      />)
    );
  }

  it('카테고리 목록을 보여준다', () => {
    const { getByText } = renderCategories(null);

    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('중식')).toBeInTheDocument();
    expect(getByText('일식')).toBeInTheDocument();
  });

  it('목록이 클릭되면 체크 표시를 한다', () => {
    const checkedCategory = {
      id: 1,
      text: '한식',
    };

    const { getByText } = renderCategories(checkedCategory);

    expect(getByText('한식(V)')).toBeInTheDocument();
  });
});
