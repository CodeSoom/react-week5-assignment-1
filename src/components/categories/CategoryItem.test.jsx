import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryItem from './CategoryItem';

describe('CategoryItem', () => {
  const handleClick = jest.fn();

  const renderCategoryItem = ({ categoryName, isSelected }) => render((
    <CategoryItem
      categoryName={categoryName}
      isSelected={isSelected}
      onClick={handleClick}
    />
  ));

  it('renders region and check-sign if selected', () => {
    const { queryByText } = renderCategoryItem({
      categoryName: '한식',
      isSelected: true,
    });

    expect(queryByText(/한식\(V\)/)).not.toBeNull();
  });

  it('renders only region-name if not selected', () => {
    const { queryByText } = renderCategoryItem({
      categoryName: '한식',
      isSelected: false,
    });

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('calls click handler', () => {
    const { getByText } = renderCategoryItem({
      categoryName: '한식',
    });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
