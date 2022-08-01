import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const sampleCategories = [
    { id: 0, name: '한식' },
    { id: 1, name: '중식' },
    { id: 2, name: '일식' },
  ];

  const handleClickCategory = jest.fn();

  const renderElement = (categories) => render(
    <Categories
      categories={categories}
      onClickCategory={handleClickCategory}
    />,
  );

  it('categories를 렌더링 한다.', () => {
    const { getByText } = renderElement(sampleCategories);
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = renderElement(sampleCategories);

    fireEvent.click(getByText('한식'));

    expect(handleClickCategory).toBeCalledWith({ id: 0, name: '한식' });
  });
});
