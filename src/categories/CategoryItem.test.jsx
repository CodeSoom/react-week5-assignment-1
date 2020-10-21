import React from 'react';

import { render } from '@testing-library/react';

import CategoryItem from './CategoryItem';

describe('CategoryItem', ({ categoryName, isSelected }) => {
  const renderCategoryItem = render((
    <CategoryItem
      categoryName={categoryName}
      isSelected={isSelected}
    />
  ));

  it('renders region\'s name if not selected', () => {
    const { queryByText } = renderCategoryItem({
      categoryName: '한식',
      isSelected: false,
    });

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('renders region\'s name and check if selected', () => {
    const { queryByText } = renderCategoryItem({
      categoryName: '한식',
      isSelected: true,
    });

    expect(queryByText(/한식\(V\)/)).not.toBeNull();
  });
});
