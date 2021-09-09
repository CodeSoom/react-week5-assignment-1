import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickCategory = jest.fn();
  const checkedCategory = {};
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
  ];

  function renderCategories() {
    return (
      render(<Categories
        categories={categories}
        onClickCategory={handleClickCategory}
        checkedElement={checkedCategory}
      />)
    );
  }

  it('카테고리 목록을 보여준다', () => {
    const { getByText } = renderCategories();

    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('중식')).toBeInTheDocument();
    expect(getByText('일식')).toBeInTheDocument();
  });
});
