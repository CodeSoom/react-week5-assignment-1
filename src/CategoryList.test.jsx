import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import CategoryList from './CategoryList';

describe('CategoryList', () => {
  const handleClick = jest.fn();

  given('selectedCategory', () => ({}));

  const renderCategoryList = () => render((
    <CategoryList
      categories={[
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
      ]}
      onClick={handleClick}
      selectedCategory={given.selectedCategory}
    />
  ));

  it('renders categories', () => {
    const { container } = renderCategoryList();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
    expect(container).toHaveTextContent('일식');
  });

  it('renders selected category', () => {
    given('selectedCategory', () => ({ id: 1, name: '한식' }));

    const { container } = renderCategoryList();

    expect(container).toHaveTextContent('한식(V)');
  });

  it('listens click event', () => {
    const { getByText } = renderCategoryList();

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
